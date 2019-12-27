import React from "react";
import ReactEcharts from "echarts-for-react";

export default class VehicleOrigin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getOption = (params) => {
        return {
            width: "80%",
            height: "65%",
            grid: {
                top: "20%",
                left: "10%"
            },
            xAxis: {
                name: '省',
                type: 'category',
                data: ['河北', '湖南', '江西', '江苏', '浙江', '甘肃', '陕西', '广东', '云南', '重庆'],
                axisLabel: {
                    margin: 2,
                    textStyle: {
                        fontSize: 8,
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
                name: "车数/辆",
                max: 100,
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
                    color: "rgb(10,102,238)",
                }
            }]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [89, 86, 83, 78, 63, 52, 47, 30, 17, 9] })}
                style={{ height: "95%", width: "95%" }}
            />
        )
    }
}