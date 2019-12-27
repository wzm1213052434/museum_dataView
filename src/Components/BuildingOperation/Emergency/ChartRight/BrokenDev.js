import React from "react";
import ReactEcharts from 'echarts-for-react';

class BrokenDev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption() {
        var xData = ['4.11', '4.12', '4.13', '4.14', '4.15', '4.16', '4.17'];
        var y1Data = [55, 77, 45, 80, 36, 61, 37];
        return {
            width: "80%",
            height: "60%",
            grid: {
                top: "25%",
                left: "12%"
            },
            xAxis: [
                {
                    type: 'category',
                    show: true,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgb(0, 110, 227)'
                        }
                    },
                    data: xData
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '数量',
                    splitNumber: 4,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgb(0, 110, 227)'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        color: 'rgb(0, 110, 227)'
                    }
                },
                {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '监控数量',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#1dacfe'
                            }
                        }
                    },
                    itemStyle: {
                        color: "rgb(0, 110, 227)"
                    },
                    barWidth: '40%',
                    data: y1Data
                },
                {
                    name: '监控密度',
                    lineStyle: {
                        color: 'rgb(28, 244, 249)',
                    },
                    type: 'line',
                    itemStyle: {
                        opacity: 0
                    },
                    data: y1Data
                }
            ]
        }
    }

    render() {
        return (
            <div style={{ height: "90%", width: "100%" }}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "100%" }}
                ></ReactEcharts>
            </div>
        )
    }
}

export default BrokenDev;