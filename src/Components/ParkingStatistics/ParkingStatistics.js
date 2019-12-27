import React, { PureComponent } from "react";
import UseageRate from "./leftPane/UseageRate";
import StayTime from "./leftPane/StayTime";
import CountryMap from "./middlePane/CountryMap";
import CarCal from "./middlePane/CarCal";
import CarTrend from "./rightPane/CarTrend";
import CarType from "./rightPane/CarType";
import Title from "../Title/Title";
import "./ParkingStatistics.css";
export default class ParkingStatistics extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let series = [
            "综合",
            "游客统计",
            "视频监控",
            "停车场综合统计",
            "指挥调度",
            "WIFI",
            "口碑",
            "广播控制",
            "智慧厕所"
        ];
        return (
            <div className="backOfParking">
                <Title name="停车场综合统计" />
                <div className="leftPane">
                    <UseageRate />
                    <StayTime />
                </div>
                <div className="middlePane">
                    <CountryMap />
                    <CarCal />
                </div>
                <div className="rightPane">
                    <CarTrend />
                    <CarType />
                </div>
            </div>
        );
    }
}
