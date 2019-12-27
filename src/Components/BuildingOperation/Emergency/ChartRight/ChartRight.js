import React, { PureComponent } from 'react';
import style from "../../BuildingOperation.module.css";
import BrokenDev from "./BrokenDev";
import DevRun from "./DevRun";
import TodayBrokenUp from "./TodayBrokenUp";
import TodayBrokenDown from "./TodayBrokenDown";
export default class BuildingChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="chart-right-whole">
                <div className="chart-area">
                    <div className="chart-title">设备运行故障管理</div>
                    <DevRun></DevRun>
                </div>
                <div className={style.chartAreaLong}>
                    <div className="chart-title">当日故障数量</div>
                    <div style={{ height: "30%", width: "100%" }}>
                        <TodayBrokenUp></TodayBrokenUp>
                    </div>
                    <div style={{ height: "65%", width: "100%" }}>
                        <TodayBrokenDown></TodayBrokenDown>
                    </div>
                </div>
                <div className="chart-area">
                    <div className="chart-title">故障设备数变化趋势</div>
                    <BrokenDev></BrokenDev>
                </div>
            </div>
        );
    }
}
