import React from 'react';
import Missions from "./Missions/Missions";
import PageInfo from "./PageInfo/PageInfo";
import Error from "../page/Error/Error";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import './app.scss'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className='wrapper'>
                    <Switch>
                        <Route exact path="/" component={Missions}/>
                        <Route path="/page-info/:id" component={PageInfo}/>
                        <Route path="/error" component={Error}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </BrowserRouter>
            <div id='stars'/>
            <div id='stars2'/>
            <div id='stars3'/>
        </>
    );
};

export default App;