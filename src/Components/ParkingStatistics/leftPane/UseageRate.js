import React from "react";
import { Progress } from "antd";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import liquidFill from "echarts-liquidfill";
import "./UseageRate.css";
class UseageRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whole: 100,
            per: 20
        };
    }

    getOption = () => {
        return {
            tooltip: {
                trigger: "item"
            },
            legend: {
                x: "center",
                bottom: 5,
                itemGap: 10,
                itemWidth: 15,
                textStyle: {
                    fontSize: 12,
                    color: "rgb(30,177,185)"
                },
                align: "left",
                data: ["A区", "B区", "C区", "D区"],
                z: 3
            },
            series: [
                {
                    name: "访问来源",
                    type: "pie",
                    radius: "60%",
                    center: ["30%", "35%"],
                    data: [
                        {
                            value: 335,
                            name: "A区",
                            itemStyle: {
                                color: "rgb(19,132,236)"
                            }
                        },
                        {
                            value: 310,
                            name: "B区",
                            itemStyle: {
                                color: "rgb(30,177,185)"
                            }
                        },
                        {
                            value: 234,
                            name: "C区",
                            itemStyle: {
                                color: "rgb(214,185,56)"
                            }
                        },
                        {
                            value: 135,
                            name: "D区",
                            itemStyle: {
                                color: "rgb(50,205,50)"
                            }
                        }
                    ],
                    labelLine: false
                },
                {
                    type: "liquidFill",
                    data: [
                        {
                            value: 0.5,
                            itemStyle: {
                                color: "rgb(30,177,185)"
                            }
                        }
                    ],
                    radius: "60%",
                    center: ["75%", "35%"],
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: "rgb(30,177,185)",
                        color: "rgba(0,0,0,0)"
                    },
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 15,
                                color: "rgb(255,167,72)"
                            }
                        }
                    },
                    outline: {
                        show: false
                    }
                }
            ]
        };
    };

    onClick = params => {
        alert(params.name);
    };
    render() {
        const onEvents = {
            click: this.onClick
        };
        return (
            <div className="contentOfRate">
                <div>
                    <p className="titleOfRate">停车场使用率</p>
                </div>
                <div className="pieChart">
                    <ReactEcharts
                        option={this.getOption()}
                        onEvents={onEvents}
                        style={{ width: "100%", height: "15vh" }}
                    />
                </div>

                <button className="findMoreButton">查看更多</button>
            </div>
        );
    }
}
export default UseageRate;
