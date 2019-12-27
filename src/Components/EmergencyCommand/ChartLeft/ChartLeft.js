import React, { PureComponent } from 'react';
import EmergencySituationAnalysis from "./EmergencySituationAnalysis";
import EmergencyDevelopmentTrend from "./EmergencyDevelopmentTrend";
import EmergencyType from "./EmergencyType";
import EmergencyTimeConsumingStatistics from "./EmergencyTimeConsumingStatistics";

export default class EmergencyCommandChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area">
                    <div className="chart-title">应急事件处理情况分析</div>
                    <EmergencySituationAnalysis></EmergencySituationAnalysis>
                </div>
                <div className="chart-area">
                    <div className="chart-title">应急事件发展趋势</div>
                    <EmergencyDevelopmentTrend></EmergencyDevelopmentTrend>
                </div>
                <div className="chart-area">
                    <div className="chart-title">应急事件类型及等级排名</div>
                    <EmergencyType></EmergencyType>
                </div>
                <div className="chart-area">
                    <div className="chart-title">应急事件处理耗时统计</div>
                    <EmergencyTimeConsumingStatistics></EmergencyTimeConsumingStatistics>
                </div>
            </div>
        );
    }
}
