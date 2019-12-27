import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';

export default class StayDuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = () => {
        return {
            width: "70%",
            height: "75%",
            tooltip: {
                trigger: "axis"
            },
            grid: {
                left: "17%",
                top: "10%"
            },
            calculable: true,
            xAxis: [
                {
                    name: '辆',
                    type: "value",
                    boundaryGap: [0, 0.1],
                    axisLine: {
                        lineStyle: {
                            color: "rgb(10,102,238)"
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    splitNumber: 3,
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "category",
                    nameGap: 5,
                    data: [
                        "1h",
                        "2h",
                        "3h",
                        "4h",
                        "5h",
                        "6h",
                        "7h",
                        "8h",
                        "8h-1d",
                        ">1d"
                    ],
                    axisLine: {
                        lineStyle: {
                            color: "rgb(10,102,238)"
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    type: "bar",
                    data: [64, 18, 25, 14, 44, 62, 4, 65, 36, 46],
                    barWidth: 12,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                { offset: 0, color: 'rgb(10,102,238)' },
                                { offset: 1, color: 'rgb(28,244,249)' }
                            ]
                        )
                    },
                    label: {
                        show: "true",
                        position: "right",
                        color: "rgb(28, 244, 249)"
                    }
                }
            ]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ width: "100%", height: "90%" }}
            />
        );
    }
}