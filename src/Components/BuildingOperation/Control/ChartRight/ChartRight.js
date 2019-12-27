import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import AirChartRight from './Air';
import FreshChartRight from './Fresh';
import OtherChartRight from './Other';

export default class BuildingChartRight extends PureComponent {
    render() {
        return (
           <div className="chart-right-whole">
              <Route path="/building-operation/buildingControl" exact component={ AirChartRight } />
              <Route path="/building-operation/buildingControl/air" exact component={ AirChartRight } />
              <Route path="/building-operation/buildingControl/fresh" exact component={ FreshChartRight } />
              <Route path="/building-operation/buildingControl/other" exact component={ OtherChartRight } /> 
            </div>
        );
    }
}
