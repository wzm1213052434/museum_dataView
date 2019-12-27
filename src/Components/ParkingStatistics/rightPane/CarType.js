import React from "react";
import ReactEcharts from "echarts-for-react";
import "./CarType.css";
class CarType extends React.Component {
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
                    fontWeight: "400",
                    fontSize: "12"
                },
                textAlign: "left",
                padding: [10, 0, 5, 200]
            },
            legend: {
                x: "center",
                top: 0,
                itemGap: 10,
                itemWidth: 15,
                itemHeight: 10,
                textStyle: {
                    fontSize: 12
                },
                align: "left"
            },
            width: "75%",
            height: "55%",
            grid: {
                top: "45%",
                left: "15%"
            },
            xAxis: {
                type: "value",
                position: "top",
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(90,245,250,0.7)"
                    }
                }
            },
            yAxis: {
                type: "category",
                inverse: true,
                axisLine: {
                    lineStyle: {
                        color: "rgba(90,245,250,0.7)"
                    }
                }
            },
            series: [
                {
                    name: "小车",
                    type: "bar",
                    data: [-165],
                    itemStyle: {
                        color: "rgb(30,177,185)"
                    }
                },
                {
                    name: "中巴",
                    type: "bar",
                    data: [150],
                    itemStyle: {
                        color: "rgb(19,132,236)"
                    }
                },
                {
                    name: "大巴",
                    type: "bar",
                    data: [220],
                    itemStyle: {
                        color: "rgb(36,176,99)"
                    }
                }
            ]
        };
    };

    render() {
        return (
            <div className="typePane">
                <div className="typeTitle">车辆出入类型</div>
                <div className="typeCharts">
                    <div>
                        <div>
                            <ReactEcharts
                                option={this.getOption({ title: "日" })}
                                style={{ height: "14vh" }}
                            />
                        </div>
                        <div>
                            <ReactEcharts
                                option={this.getOption({ title: "月" })}
                                style={{ height: "14vh" }}
                            />
                        </div>
                        <div>
                            <ReactEcharts
                                option={this.getOption({ title: "年" })}
                                style={{ height: "14vh" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CarType;
