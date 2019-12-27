import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import HomeChartRight from '../../Components/Home/ChartRight/ChartRight';
import TouristChartRight from '../../Components/Tourist/ChartRight/ChartRight';
import PublicPraiseChartRight from '../../Components/PublicPraise/ChartRight/ChartRight';
import CulturalRelicChartRight from '../../Components/CulturalRelic/ChartRight/ChartRight';
import BuildingChartRight from '../../Components/BuildingOperation/Energy/ChartRight/ChartRight';
import BuildingAidChartRight from '../../Components/BuildingOperation/Emergency/ChartRight/ChartRight';
import BuildingControlChartRight from '../../Components/BuildingOperation/Control/ChartRight/ChartRight';
import EmergencyCommandChartRight from '../../Components/EmergencyCommand/ChartRight/ChartRight';
import EmergencyCommandOnlineChartRight from '../../Components/EmergencyCommand/Online/ChartRight';
import VenueServiceChartRight from '../../Components/VenueService/Broadcast/ChartRight/ChartRight';
import VenueServiceWifiChartRight from '../../Components/VenueService/Wifi/ChartRight/ChartRight';
import VenueServiceToiletChartRight from '../../Components/VenueService/SmartToilet/ChartRight/ChartRight';
import VenueServiceParkingChartRight from '../../Components/VenueService/ParkingArea/ChartRight/ChartRight';
import "./RightCharts.css"

export default class RightCharts extends PureComponent {
    render() {
        return (
            <div className="right-charts">
              <Route path="/home" exact component={ HomeChartRight } />
              <Route path="/audience-portraits" exact component={ TouristChartRight } />
              <Route path="/building-operation" exact component={ BuildingChartRight } />
              <Route path="/building-operation/powerCompute" exact component={ BuildingChartRight } />
              <Route path="/building-operation/aidManagement" exact component={ BuildingAidChartRight } />
              <Route path="/building-operation/buildingControl" component={ BuildingControlChartRight } />
              <Route path="/public-praise" exact component={ PublicPraiseChartRight } />
              <Route path="/cultural-relic" exact component={ CulturalRelicChartRight } />
              <Route path="/emergency-command" exact component={ (routeProps) => (<EmergencyCommandChartRight history={ routeProps.history } changeBg={ this.props.changeBg } changeFloor={ this.props.changeFloor } />) } />
              <Route path="/emergency-command/online" exact component={ EmergencyCommandOnlineChartRight } />
              <Route path="/venue-service" exact component={VenueServiceChartRight} />
              <Route path="/venue-service/broadcast" exact component={VenueServiceChartRight} />
              <Route path="/venue-service/wifi" exact component={VenueServiceWifiChartRight} />
              <Route path="/venue-service/toilet" exact component={VenueServiceToiletChartRight} />
              <Route path="/venue-service/parking" exact component={VenueServiceParkingChartRight} />
            </div>
            );
    }
}