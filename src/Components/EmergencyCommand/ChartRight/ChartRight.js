import React, { PureComponent } from 'react';
import EmergencyManage from "./EmergencyManage";
import style from "./ChartRight.module.css";

export default class EmergencyCommandChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className={style.chartAreaRight}>
                    <div className="chart-title">应急事件管理</div>
                    <EmergencyManage history={this.props.history} changeBg={this.props.changeBg} changeFloor={this.props.changeFloor} />
                </div>
            </div>
        );
    }
}
