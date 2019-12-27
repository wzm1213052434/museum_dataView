import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import HomeChartLeft from '../../Components/Home/ChartLeft/ChartLeft';
import TouristChartLeft from '../../Components/Tourist/ChartLeft/ChartLeft';
import PublicPraiseChartLeft from '../../Components/PublicPraise/ChartLeft/ChartLeft';
import CulturalRelicChartLeft from '../../Components/CulturalRelic/ChartLeft/ChartLeft';
import BuildingChartLeft from '../../Components/BuildingOperation/Energy/ChartLeft/ChartLeft';
import BuildingAidChartLeft from '../../Components/BuildingOperation/Emergency/ChartLeft/ChartLeft';
import BuildingControlChartLeft from '../../Components/BuildingOperation/Control/ChartLeft/ChartLeft';
import EmergencyCommandChartLeft from '../../Components/EmergencyCommand/ChartLeft/ChartLeft';
import EmergencyCommandOnlineChartLeft from '../../Components/EmergencyCommand/Online/ChartLeft';
import VenueServiceChartLeft from '../../Components/VenueService/Broadcast/ChartLeft/ChartLeft';
import VenueServiceWifiChartLeft from '../../Components/VenueService/Wifi/ChartLeft/ChartLeft';
import VenueServiceToiletChartLeft from '../../Components/VenueService/SmartToilet/ChartLeft/ChartLeft';
import VenueServiceParkingtChartLeft from '../../Components/VenueService/ParkingArea/ChartLeft/ChartLeft';

import "./LeftCharts.css";
export default class LeftCharts extends PureComponent {
    render() {
        return (
            <div className="left-charts">
                <Route path="/home" exact component={HomeChartLeft} />
                <Route path="/audience-portraits" exact component={ TouristChartLeft } />
                <Route path="/building-operation" exact component={ BuildingChartLeft } />
                <Route path="/building-operation/powerCompute" exact component={ BuildingChartLeft } />
                <Route path="/building-operation/aidManagement" exact component={ BuildingAidChartLeft } />
                <Route path="/building-operation/buildingControl" component={ BuildingControlChartLeft } />
                <Route path="/public-praise" exact component={PublicPraiseChartLeft} />
                <Route path="/cultural-relic" exact component={CulturalRelicChartLeft} />
                <Route path="/emergency-command" exact component={ EmergencyCommandChartLeft } />
                <Route path="/emergency-command/online" exact component={ EmergencyCommandOnlineChartLeft } />
                <Route path="/venue-service" exact component={VenueServiceChartLeft} />
                <Route path="/venue-service/broadcast" exact component={VenueServiceChartLeft} />
                <Route path="/venue-service/wifi" exact component={VenueServiceWifiChartLeft} />
                <Route path="/venue-service/toilet" exact component={VenueServiceToiletChartLeft} />
                <Route path="/venue-service/parking" exact component={VenueServiceParkingtChartLeft} />
            </div>
        );
    }
}