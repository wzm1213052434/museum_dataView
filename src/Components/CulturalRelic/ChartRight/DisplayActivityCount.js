import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';

export default class DisplayActivityCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getOption = (params) => {
        return {
            width: "80%",
            height: "65%",
            grid: {
                top: "22%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月','11月','12月'],
                axisLabel: {
                    marginTop: 5,
                    textStyle: {
                        fontSize: 10,
                    },
                    align: "center"
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
            yAxis: {
                type: 'value',
                name: "人数",
                max: 800,
                min: 0,
                nameTextStyle: {
                    verticalAlign: "bottom",
                    lineHeight: 10
                },
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                data: params.data,
                type: 'bar',
                barWidth: 14,
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28,244,249)"
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgb(10,102,238)"
                    },
                    {
                        offset: 0.2,
                        color: "rgba(10,102,238,0.8)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,0,0,0.1)"
                    }
                ])
                },
            }]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [500,700,600,720,280,550,370,620,430,540,320,270] })}
                style={{ height: "95%", width: "98%" }}
            />
        )
    }
}