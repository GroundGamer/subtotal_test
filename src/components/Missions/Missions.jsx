import React, {useEffect, useState} from 'react';
import MissionsItem from "./MissionsItem/MissionsItem";
import {useDispatch, useSelector} from "react-redux";
import {getMissionsDetails} from "../actions/getMissionsDetails";
import {getMissionsSearch} from "../actions/getMissionsSearch";

import './Missions.scss'
import {Redirect} from "react-router-dom";

const Missions = () => {
    const dispatch = useDispatch() // Позволяет вызывать action
    const missions = useSelector(state => state.repos.items) // Получаем массив миссий
    const isFetching = useSelector(state => state.repos.isFetching) // Получаем true когда данные грузятся, false когда загрузились
    const isFetchError = useSelector(state => state.repos.isFetchError) // Получаем true при ошибке, false когда ошибка исправлена

    const [searchValue, setSearchValue] = useState("") // Делаем управляемым input, а также запоминаем наши введённые данные
    const [orderBy, setOrderBy] = useState(true) // Делаем сортировку элементов

    useEffect(() => {
        dispatch(getMissionsDetails())
    }, [searchValue])

    function searchHandler() {
        dispatch(getMissionsSearch(searchValue))
    }

    if(isFetchError){
        return <Redirect to="/error"/>
    }

    return (
        <div className='missions'>
            <div className="missions__order_and_search">
                <div className="missions__order">
                    <p onClick={() => setOrderBy(!orderBy)}
                       className="missions__order_item">{orderBy ? 'По убыванию' : 'По возрастанию'}
                    </p>
                </div>
                <div className="missions__search">
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Введите название миссии' className="missions__search-input"/>
                    <button onClick={() => searchHandler()} className="missions__search-btn">Поиск</button>
                </div>
            </div>
            <div className="missions__list">
                {
                    isFetching === false ?
                        missions
                            .sort((a, b) => Number(a.date_local.split('-')[0]) < Number(b.date_local.split('-')[0]) && orderBy ? 1 : -1 )
                            .map(mission => <MissionsItem key={mission.id} mission_prop={mission}/>) :
                        <div className="fetching"/>
                }
            </div>
        </div>
    );
};

export default Missions;

// В данном компоненте мы получаем данные из state reducer'a, а также передаём отсортированные данные, по убыванию или ворзрастанию, в наш MissionsItem и выводим в список каждую миссию.