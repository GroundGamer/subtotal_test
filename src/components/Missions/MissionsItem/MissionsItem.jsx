import React from 'react';
import {NavLink} from "react-router-dom";

import './MissionsItem.scss'

const MissionsItem = (props) => {
    const mission = props.mission_prop

    return (
        <div className="missions__list-item">
            <p className="missions__list-item-namedMissions">Название миссии: <NavLink to={`/page-info/${mission.id}`}>{mission.name}</NavLink></p>
            <p className="missions__list-item-dateMissions">Дата запуска: {mission.date_utc.split('-')[0]} год</p>
            <p className="missions__list-item_informationMissions">Текстовая
                информация: {mission.details !== null ? mission.details : <p>Текст отсутствует!</p>}</p>
            <img src={mission.links.flickr.original[mission.links.flickr.original.length - 1]} alt="rocket photo"
                 className="missions__list-item_imgRocket"/>
        </div>
    );
};

export default MissionsItem;