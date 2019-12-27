import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Title from '../../Components/Common/Title/Title';
import EmergencyCommandOnlineTitle from '../../Components/EmergencyCommand/Online/Title';
import './Titles.css';
import { TITLES_CONST } from './Const.js';

export default class Titles extends PureComponent {
    render() {
        return (
            <div className="titles">
              <Route path="/home" exact component={ () => (<Title title="博物馆智慧运营指挥中心" />) } />
              <Route path="/audience-portraits" exact component={ () => (<Title title="观众画像" />) } />
              <Route path="/building-operation" component={ (routeProps) => 
                (<Title title="楼宇运行" options={ TITLES_CONST.BUILDING_OPTIONS } history={ routeProps.history } />) } />
              <Route path="/public-praise" exact component={ () => (<Title title="口碑舆情" />) } />
              <Route path="/emergency-command" exact component={ () => (<Title title="应急指挥" />) } />
              <Route path="/cultural-relic" exact component={ () => (<Title title="文物监管" />) } />
              <Route path="/emergency-command/online" exact component={ EmergencyCommandOnlineTitle } />
              <Route path="/venue-service" component={ (routeProps) => 
                (<Title title="场馆服务" options={ TITLES_CONST.VENUE_OPTIONS }  history={ routeProps.history } />) } />
            </div>
            );
    }
}

