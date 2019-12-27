import React from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";

class DurationDistributionTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption() {
        var category = ['0小时', '0.5小时', '1小时', '1.5小时', '2小时', '2.5小时', '3小时', '3.5小时',''];
        var lineData = [1000, 9000, 9236, 10000, 9056, 9230, 9264, 9056,1000];
        var barData = [0, 450, 600, 400, 650, 300, 500, 300,0];
        var rateData = [];
        for (var i = 0; i < 10; i++) {
            var rate = barData[i] / lineData[i] * 100;
            rateData[i] = rate.toFixed(2);
        }
        return {
            height: "65%",
            width: "80%",
            color:['rgb(10,102,238)','rgb(28,244,249)'],
            icon: 'rect',
            legend: {
                data: ['连接人数','百分比'],
                textStyle: {
                    color: "rgb(10,102,238)",
                }
            },
            grid: {
                x: '12%',
                width: '80%',
                y: '12%',
            },
            xAxis: {
                data: category,
                boundaryGap: false,   // boundaryGap值为false的时候，折线第一个点在y轴上
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 10,
                    },
                },
            },
            yAxis: [
                {
                    name: '人数',
                    max: 700,
                    min: 0,
                    splitLine: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: "rgb(10,102,238)"
                        }
                    },
                    axisLabel: {
                        interval: 0,
                    },
                    axisTick: {         //y轴刻度线
                        show:false
                    },
                },
                {
                    name: '百分比',
                    max: 8,
                    min: 0,
                    splitLine: { show: false },
                    axisLabel: {
                        interval: 0
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgb(10,102,238)"
                        }
                    },
                    axisTick: {         //y轴刻度线
                        show:false
                    },
                }
            ],
            series: [
                {
                    name: '百分比',
                    type: 'line',
                    showAllSymbol: true,
                    symbolSize: 8,
                    yAxisIndex: 1,
                    symbol: 'none',  //取消折点圆圈
                    itemStyle: {
                        normal: {
                            color: 'rgb(28,244,249)'
                        },
                    },
                    data: rateData
                },
                {
                    name: '连接人数',
                    type: 'bar',
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                1, 1, 1, 0,         //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位。
                                [
                                    { offset: 0, color: 'rgba(0,0,0,0.6)' },
                                    { offset: 1, color: 'rgb(10,102,238)' }
                                ]
                            )
                            // color: 'rgb(10,102,238)'
                        }
                    },
                    areaStyle: { 
                        normal: {}
                    },
                    data: barData
                }
            ]
        }
    };


    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ width: "100%", height: "90%", marginTop: "2%" }}
            ></ReactEcharts>
        )
    }
}

export default DurationDistributionTrend;