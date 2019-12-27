import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';

export default class ProductsProfits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption() {
        return {
            height: "65%",
            grid: {
                left: "12%",
                top: "23%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['9.22', '9.23', '9.24', '9.25', '9.26', '9.27', '9.28', '9.29'],
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                name: "万元",
                type: 'value',
                margin: 2,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                data: [4.5, 6.3, 7.2, 3.0, 4.1, 4.75, 2.08, 3.51],
                type: 'line',
                lineStyle: {
                    color: "rgb(28,244,249)"
                },
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28,244,249)"
                },
                areaStyle: { normal: {} },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 1, 0,
                        [
                            { offset: 0, color: 'rgba(0,0,0,0)' },
                            { offset: 0.3, color: 'rgba(10,102,238,0.2)' },
                            { offset: 1, color: 'rgb(10,102,238)' }
                        ]
                    )
                }
            }]
        }
    }

    render() {
        return (
            <div style={{ height: "95%", width: "98%" }}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "100%" }}
                >
                </ReactEcharts>
            </div>
        )
    }
}