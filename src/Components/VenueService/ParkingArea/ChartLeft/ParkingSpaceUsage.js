import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";

class ParkingSpaceUsage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption() {
        var category = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
        var barData = [50, 200, 380, 380, 500, 230, 400, 350, 230];
        var lineData = [60, 190, 420, 500, 520, 580, 300, 250, 250];
        return {
            height: "60%",
            width: "80%",
            color:['rgb(10,102,238)','rgb(28,244,249)'],
            icon: 'rect',
            legend: {
                data: ['今日车位使用数','上周车位使用数'],
                textStyle: {
                    color: "rgb(10,102,238)"
                }
            },
            grid: {
                x: '12%',
                width: '82%',
                y: '22%',
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                },
                axisLabel: {
                    interval: 0
                },
            },
            yAxis: [
                {
                    name: '车位数',
                    max: 600,
                    min: 0,
                    splitLine: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: "rgb(10,102,238)"
                        }
                    },
                    axisTick: {         //y轴刻度线
                        show:false
                    },
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
                    name: '上周车位使用数',
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
                    data: lineData
                },
                {
                    name: '今日车位使用数',
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
        );
    }
}

export default ParkingSpaceUsage;