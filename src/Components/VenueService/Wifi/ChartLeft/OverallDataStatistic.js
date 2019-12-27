import React from "react";
import ReactEcharts from "echarts-for-react";

class OverallDataStatistic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getStatics = () => {
            let res = [];
            let radiusCount = 50 / params.data.length;
            let radius = 60;
            let colorList = ["rgb(28,244,249)", "rgb(0,138,238)", "rgb(0,83,229)"]
            for (let i = 0; i < params.data.length; i++) {
                res.push(
                    {
                        type: 'pie',
                        clockWise: false,
                        center: ["30%", "50%"],
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
                                value: 1500 - params.data[i],
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
            width: "85%",
            height: "95%",
            legend: {
                orient: 'vertical',
                data: params.names,
                itemHeight: 12,
                right: 'right',
                y: 'bottom',
                textStyle: {
                    fontSize: 12,
                    color: ["rgb(28,244,249)", "rgb(0,138,238)", "rgb(0,83,229)"]
                }
            },
            grid: {
                top: '-57%',
                left: "30%",
                containLabel: false
            },
            yAxis: [{
                type: 'category',
                inverse: true,
                min: -8,
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
                        fontSize: 14,
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
                option={this.getOption({ data: [900, 570, 207], names: ["在线来访总数", "连接峰值", "来访注册总数"] })}
                style={{ height: "90%", width: "90%", marginLeft:"3%"}}
            />
        );
    }
}

export default OverallDataStatistic;