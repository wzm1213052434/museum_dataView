import React, { PureComponent } from 'react';
import StayDuration from './StayDuration';
import VehicleOrigin from './VehicleOrigin';
import VehicleTypeAnalysis from './VehicleTypeAnalysis';

export default class VenueServiceParkingChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">停留时长统计</div>
                    <StayDuration></StayDuration>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">车辆来源地</div>
                    <VehicleOrigin></VehicleOrigin>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">车辆类型分析</div>
                    <VehicleTypeAnalysis></VehicleTypeAnalysis>
                </div>
            </div>
        );
    }
}
