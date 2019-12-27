import React, { PureComponent } from 'react';
import style from '../../VenueService.module.css';
import ParkingSpaceDisplay from './ParkingSpaceDisplay';
import ParkingManagement from './ParkingManagement';
import ParkingSpaceUsage from './ParkingSpaceUsage';

export default class VenueServiceParkingChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">停车场车位数据显示</div>
                    <ParkingSpaceDisplay></ParkingSpaceDisplay>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">停车场管理</div>
                    <ParkingManagement></ParkingManagement>
                </div>
                <div className={style.venueServiceParkingUse}>
                    <div className="chart-title">今日及上周同期各时段车位使用情况</div>
                    <ParkingSpaceUsage></ParkingSpaceUsage>
                </div>
            </div>
        );
    }
}
