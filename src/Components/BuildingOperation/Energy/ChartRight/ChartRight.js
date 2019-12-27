import React, { PureComponent } from 'react';
import OperationStatics from "./OperationStatics";
import LoadAnalysis from "./LoadAnalysis";
import PowerStatics from "./PowerStatics";
import style from "../../BuildingOperation.module.css";

export default class BuildingChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="chart-right-whole">
                <div className="chart-area">
                    <div className="chart-title">负荷分析</div>
                    <LoadAnalysis></LoadAnalysis>
                </div>
                <div className={style.chartAreaMiddle}>
                    <div className="chart-title">能效数据情况</div>
                    <PowerStatics></PowerStatics>
                </div>
                <div className={style.chartAreaMiddle}>
                    <div className="chart-title">运行相关数据</div>
                    <OperationStatics></OperationStatics>
                </div>
            </div>
        );
    }
}
