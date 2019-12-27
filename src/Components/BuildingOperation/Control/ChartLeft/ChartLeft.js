import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import AirChartLeft from './Air';
import FreshChartLeft from './Fresh';
import OtherChartLeft from './Other';

export default class BuildingChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
              <Route path="/building-operation/buildingControl" exact component={ AirChartLeft }/>
              <Route path="/building-operation/buildingControl/air" exact component={ AirChartLeft } />
              <Route path="/building-operation/buildingControl/fresh" exact component={ FreshChartLeft } />
              <Route path="/building-operation/buildingControl/other" exact component={ OtherChartLeft } />    
            </div>
        );
    }
}
