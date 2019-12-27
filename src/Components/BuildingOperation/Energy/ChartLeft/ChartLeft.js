import React, { PureComponent } from 'react';
import EfficiencyManagement from './EfficiencyManagement' ;
import EfficiencyStatistics from './EfficiencyStatistics';
import FreeStatistics from './FreeStatistics';
import FreeProportion from './FreeProportion';

export default class BuildingChartLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area">
                    <div className="chart-title">能效管理</div>
                    <EfficiencyManagement></EfficiencyManagement>
                </div>
                <div className="chart-area">
                    <div className="chart-title">系统能效统计</div>
                    <EfficiencyStatistics></EfficiencyStatistics>
                </div>
                <div className="chart-area">
                    <div className="chart-title">系统费用统计</div>
                    <FreeStatistics></FreeStatistics>
                </div>
                <div className="chart-area">
                    <div className="chart-title">各类费用占比</div>
                    <FreeProportion></FreeProportion>
                </div>
            </div>
        );
    }
}
