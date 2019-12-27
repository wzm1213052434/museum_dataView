import React, { PureComponent } from 'react';
import AntiqueStatics from "./AntiqueStatics";
import EnvironmentStatics from "./EnvironmentStatics";
import TouristStatics from "./TouristStatics";
import Comment from "./Comment";
export default class HomeChartLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area">
                    <div className="chart-title">文物统计</div>
                    <AntiqueStatics></AntiqueStatics>
                </div>
                <div className="chart-area">
                    <div className="chart-title">场馆环境实时数据</div>
                    <EnvironmentStatics></EnvironmentStatics>
                </div>
                <div className="chart-area">
                    <div className="chart-title">游客实时数据</div>
                    <TouristStatics></TouristStatics>
                </div>
                <div className="chart-area">
                    <div className="chart-title">场馆口碑</div>
                    <Comment></Comment>
                </div>
            </div>
        );
    }
}
