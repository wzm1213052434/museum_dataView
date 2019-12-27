import React from "react";
import ReactEcharts from "echarts-for-react";

class EmergencySituationAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getStatics = () => {
            let res = [];
            let radiusCount = 50 / params.data.length;
            let radius = 65;
            let colorList = ["rgb(28,244,249)", "rgb(0,188,255)", "rgb(0,138,238)", "rgb(0,110,227)"]
            for (let i = 0; i < params.data.length; i++) {
                res.push(
                    {
                        type: 'pie',
                        clockWise: false,
                        center: ["25%", "50%"],
                        hoverAnimation: false,   //饼-鼠标移入均不放大
                        radius: [radius + "%", radius + radiusCount + "%"],
                        data: [
                            {
                                value: params.data[i],
                                name: params.names[i],
                                label: {
                                    show: false,
                                    position: "inside",
                                    formatter: () => {
                                        return params.data[i];
                                    }
                                },
                                labelLine: {
                                    show: false,
                                    length: 0,
                                    length2: 0
                                },
                                itemStyle: {
                                    normal: {
                                        color: colorList[i]
                                    }
                                }
                            },
                            {
                                value: 100 - params.data[i],
                                name: 'invisible',
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(0,0,0,0)',
                                        label: { show: false },
                                        labelLine: { show: false }
                                    },
                                    emphasis: {
                                        color: 'rgba(0,0,0,0)'
                                    }
                                }
                            }
                        ]
                    }
                );
                radius -= radiusCount;
            }
            return res;            
        }
        return {
            width: "90%",
            height: "100%",
            legend: {
                orient: 'vertical',
                data: params.names,
                itemHeight: 12,
                right: 'right',
                y: 'bottom',
                textStyle: {
                    fontSize: 12,
                    color: "rgb(11,110,239)"
                }
            },
            grid: {
                top: '-62%',
                left: "25%",
                containLabel: false
            },
            yAxis: [{
                type: 'category',
                inverse: true,
                min: -10,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    inside: true,
                    textStyle: {
                        color: "rgb(28,244,249)",
                        fontSize: 10,
                    },
                    show: true
                },
                data: params.data
            }],
            xAxis: [{
                show: false
            }],
            series: getStatics()
        }
    }
    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [78, 60, 34, 20], names: ["历史应急事件总数", "处理中事件总数", "待处理事件总数", "已处理事件总数"] })}
                style={{ height: "90%", width: "95%", marginLeft: "3%" }}
            />
        );
    }
}

export default EmergencySituationAnalysis;