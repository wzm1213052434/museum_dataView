import React from "react";
import ReactEcharts from "echarts-for-react";
import "./CarTrend.css";
class CarTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = prams => {
        return {
            title: {
                text: prams.title,
                textStyle: {
                    color: "rgb(255, 167, 72)",
                    fontWeight: "500",
                    fontSize: "12"
                },
                textAlign: "left",
                padding: [8, 0, 5, 170]
            },
            width: "75%",
            height: "60%",
            grid: {
                top: "20%",
                left: "20%"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                axisLine: {
                    lineStyle: {
                        color: "rgba(90,245,250,0.7)"
                    }
                }
            },
            yAxis: {
                type: "value",
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(90,245,250,0.7)"
                    }
                }
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: "line",
                    lineStyle: {
                        color: "rgba(36,176,99,1)"
                    },
                    itemStyle: {
                        color: "rgb(255,255,255)"
                    }
                },
                {
                    data: [590, 377, 531, 873, 1200, 1400, 1378],
                    type: "line",
                    lineStyle: {
                        color: "rgba(30,177,185,1)"
                    },
                    itemStyle: {
                        color: "rgb(255,255,255)"
                    }
                }
            ]
        };
    };

    render() {
        return (
            <div className="trendPane">
                <div className="trendTitle">车辆出入趋势</div>
                <div className="trendCharts">
                    <div>
                        <ReactEcharts
                            option={this.getOption({ title: "今日" })}
                            style={{ height: "14vh" }}
                        />
                    </div>
                    <div>
                        <ReactEcharts
                            option={this.getOption({ title: "近七日" })}
                            style={{ height: "14vh" }}
                        />
                    </div>
                    <div>
                        <ReactEcharts
                            option={this.getOption({ title: "本月" })}
                            style={{ height: "14vh" }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default CarTrend;
