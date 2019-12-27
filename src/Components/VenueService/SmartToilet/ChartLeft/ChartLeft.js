import React, { PureComponent } from 'react';
import SmartToiletList from './SmartToiletList';
import DeviceManagementToilet from './DeviceManagementToilet';
import ConsumerGoodsCost from './ConsumerGoodsCost';

export default class VenueServiceSmartToiletChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">厕所列表</div>
                    <SmartToiletList></SmartToiletList>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">设备管理</div>
                    <DeviceManagementToilet></DeviceManagementToilet>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">卫生间消费品统计</div>
                    <ConsumerGoodsCost></ConsumerGoodsCost>
                </div>
            </div>
        );
    }
}
