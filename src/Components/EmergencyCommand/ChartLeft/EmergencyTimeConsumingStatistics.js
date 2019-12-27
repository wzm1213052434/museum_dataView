import React from "react";
import ReactEcharts from "echarts-for-react";

class EmergencyTimeConsumingStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        return {
            width: "80%",
            height: "60%",
            grid: {
                top: "20%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', '事件1', '事件2', '事件3', '事件4', '事件5', '事件6', '事件7'],
                axisLabel: {
                    margin: 8,
                    fontSize: 12,
                    align: "center"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,83,229,1)"
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: "分钟",
                max: 10,
                min: 0,
                nameTextStyle: {
                    verticalAlign: "bottom",
                    lineHeight: 6
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,83,229,1)"
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
                type: 'line',
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                itemStyle: {
                    color: "rgb(28,244,249)"
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',//设置线性渐变
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: "rgb(10,102,238)", // 0% 处的颜色
                            }, {
                                offset: 1, color: "rgb(0,0,0)" // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    }
                }
            }]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: ['0', '5', '6', '2', '7', '8', '10', '3'] })}
                style={{ height: "90%", width: "100%" }}
            />
        );
    }
}
export default EmergencyTimeConsumingStatistics;