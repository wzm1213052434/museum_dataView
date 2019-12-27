import React from "react";
import ReactEcharts from "echarts-for-react";
import "./CarCal.css";
class CarCal extends React.Component {
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
                padding: [13, 0, 0, 170]
            },
            width: "75%",
            height: "60%",
            grid: {
                top: "25%",
                left: "18%"
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
                    areaStyle: {
                        color: "rgba(90,245,250,0.7)"
                    },
                    lineStyle: {
                        color: "rgba(90,245,250,0.7)"
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
            <div className="carNumberPane">
                <div className="carNumberTitle">全国汽车数量统计</div>
                <div className="carNumberCharts">
                    <div className="carNumberChart">
                        <ReactEcharts
                            option={this.getOption({ title: "今日" })}
                            style={{ height: "18vh" }}
                        />
                    </div>
                    <div className="carNumberChart">
                        <ReactEcharts
                            option={this.getOption({ title: "近七日" })}
                            style={{ height: "18vh" }}
                        />
                    </div>
                    <div className="carNumberChart">
                        <ReactEcharts
                            option={this.getOption({ title: "本月" })}
                            style={{ height: "18vh" }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default CarCal;
