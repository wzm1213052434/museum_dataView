import React, { PureComponent } from 'react';
import OverallDataStatistic from './OverallDataStatistic';
import ConnectionQuantityTrend from './ConnectionQuantityTrend';
import DurationDistributionTrend from './DurationDistributionTrend';

export default class VenueServiceWifiChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">整体数据统计</div>
                    <OverallDataStatistic></OverallDataStatistic>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">今日连接数量趋势</div>
                    <ConnectionQuantityTrend></ConnectionQuantityTrend>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">连接时长分布趋势</div>
                    <DurationDistributionTrend></DurationDistributionTrend>
                </div>
            </div>
        );
    }
}
