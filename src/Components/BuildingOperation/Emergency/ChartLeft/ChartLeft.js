import React, { PureComponent } from 'react';
import style from "../../BuildingOperation.module.css";
import AlarmManagement from "./AlarmManagement";

export default class BuildingChartLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{height:"100%",width:"100%"}}>
                <div className={style.chartAreaAll}>
                    <div className="chart-title">报警管理</div>
                    <AlarmManagement></AlarmManagement>
                </div>
            </div>
        );
    }
}
