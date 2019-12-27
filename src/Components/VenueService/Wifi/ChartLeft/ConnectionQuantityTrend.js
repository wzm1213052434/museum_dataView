import React from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";

class ConnectionQuantityTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption() {
        return {
            height: "65%",
            width: "80%",
            grid: {
                top:"15%",
                left: "13%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
                       '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
                axisLabel:{
                    interval: 2
                },
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                }
            },
            yAxis: {
                name: "人",
                type: 'value',
                max: 400,
                min: 0,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                },
                axisTick: {         //y轴刻度线
                    show:false
                },
            },
            series: [{
                data: [0, 0, 0, 0, 0, 0, 0, 33, 66, 100, 300, 300, 98, 150, 95, 98, 80, 120, 100, 70,30,30,20,10],
                type: 'line',
                symbol: 'none',  //取消折点圆圈
                lineStyle: {
                    color: "rgb(28,244,249)"
                },
                label: {
                    show: true,
                    position: "top",
                    color: "rgb(10,102,238)"
                },
                areaStyle: { 
                    normal: {}
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,         //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位。
                        [
                            { offset: 1, color: 'rgba(0,0,0,0.5)' },
                            { offset: 0, color: 'rgb(10,102,238)' }
                        ]
                    )
                }
            }]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ width: "100%", height: "90%"}}
            >
            </ReactEcharts>
        )
    }
}
export default ConnectionQuantityTrend;