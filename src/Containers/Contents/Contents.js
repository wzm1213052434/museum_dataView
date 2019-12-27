import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import HomeContent from '../../Components/Home/Content/Content';
import TouristContent from '../../Components/Tourist/Content/Content';
import PublicPraiseContent from '../../Components/PublicPraise/Content/Content';
import CulturalRelicContent from '../../Components/CulturalRelic/Content/Content';
import BuildingContent from '../../Components/BuildingOperation/Energy/Content/Content';
import BuildingAidContent from '../../Components/BuildingOperation/Emergency/Content/Content';
import BuildingControlContent from '../../Components/BuildingOperation/Control/Content/Content';
import EmergencyCommandContent from '../../Components/EmergencyCommand/Content/Content';
import EmergencyCommandOnlineContent from '../../Components/EmergencyCommand/Online/Content';
import VenueServiceContent from '../../Components/VenueService/Broadcast/Content/Content';
import VenueWifiContent from '../../Components/VenueService/Wifi/Content/Content';
import VenueToiletContent from '../../Components/VenueService/SmartToilet/Content/Content';
import VenueParkingContent from '../../Components/VenueService/ParkingArea/Content/Content';
import './Contents.css';

export default class Contents extends PureComponent {
    render() {
        return (
            <div className="contents">
                <Route path="/home" exact component={ HomeContent } />
                <Route path="/audience-portraits" exact component={ TouristContent } />
                <Route path="/building-operation" exact component={ BuildingContent } />
                <Route path="/building-operation/powerCompute" exact component={ BuildingContent } />
                <Route path="/building-operation/aidManagement" exact component={ BuildingAidContent } />
                <Route path="/building-operation/buildingControl" component={ BuildingControlContent} />
                <Route path="/public-praise" exact component={ PublicPraiseContent } />
                <Route path="/cultural-relic" exact component={ CulturalRelicContent } />
                <Route path="/emergency-command" exact  component={() => (<EmergencyCommandContent changeBg={this.props.changeBg}  showFloor={this.props.showFloor}/>)}/>
                <Route path="/emergency-command/online" exact  component={ EmergencyCommandOnlineContent }/>
                <Route path="/venue-service" exact component={() => (<VenueServiceContent changeBg={this.props.changeBg}/>)} />
                <Route path="/venue-service/broadcast" exact component={() => (<VenueServiceContent changeBg={this.props.changeBg}/>)} />
                <Route path="/venue-service/wifi" exact component={() => (<VenueWifiContent changeBg={this.props.changeBg}/>)} />
                <Route path="/venue-service/toilet" exact component={() => (<VenueToiletContent changeBg={this.props.changeBg}/>)} />
                <Route path="/venue-service/parking" exact component={() => (<VenueParkingContent changeBg={this.props.changeBg}/>)} />
              </div>
            );
    }
}