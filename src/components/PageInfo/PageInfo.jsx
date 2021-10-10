import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"; // Позволяет получить с ссылки параметры
import {getOneMissionsDetails} from "../actions/getOneMissionsDetails";

import './PageInfo.scss'

const PageInfo = (props) => {
    const {id} = useParams()
    const [mission, setMission] = useState([])

    useEffect(() => {
        getOneMissionsDetails(id, setMission)
    }, [])

    console.log(mission)

    return (
        <div className='pageInfo'>
            <button onClick={() => props.history.goBack()} className="pageInfo__back-btn">BACK</button>
            <div className="pageInfo__list-item">
                <img src={mission.links?.flickr?.original[mission.links.flickr.original.length - 1]} alt="rocket photo"
                     className="pageInfo__list-item_imgRocket"/>
                <p className="pageInfo__list-item-namedMissions">Название миссии: {mission.name}</p>
                <p className="pageInfo__list-item-dateMissions">Дата запуска: {mission.date_utc?.split('-')[0]} год</p>
                <p className="pageInfo__list-item_informationMissions">Текстовая
                    информация: {mission.details !== null ? mission.details : <p>Текст отсутствует!</p>}</p>
            </div>
        </div>
    );
};

export default PageInfo;

// Этот компонент выводит страницу выбранной нами миссии.