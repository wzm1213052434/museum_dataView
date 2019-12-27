import React from "react";
import ReactEcharts from "echarts-for-react";

class AntiqueStatics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    getOption = prams => {
        let getStatics = () => {
            let res = [];
            let radiusCount = 50 / prams.data.length;
            let radius = 30;
            let colorList = ["rgb(0,83,229)", "rgb(0,110,227)", "rgb(0,138,238)", "rgb(0,188,255)", "rgb(28,244,249)"]
            for (let i = 0; i < prams.data.length; i++) {
                res.push(
                    {
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: false,   //饼-鼠标移入均不放大
                        center: ["75%", "50%"],
                        radius: [radius + "%", radius + radiusCount + "%"],
                        data: [
                            {
                                value: prams.data[i],
                                name: prams.names[i],
                                label: {
                                    show: false,
                                    position: "inside",
                                    formatter: () => {
                                        return prams.data[i];
                                    },
                                    verticalAlign: "bottom",
                                    align: "right"
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
                                value: 100 - prams.data[i],
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
                radius += radiusCount;
            }
            return res;
        }
        return {
            width: "80%",
            height: "100%",
            legend: {
                orient: 'vertical',
                itemGap: 1,
                data: prams.names,
                borderRadius: 0,
                itemHeight: 6,
                left: 0,
                bottom: 0,
                textStyle: {
                    color: "rgb(11,110,239)"
                }
            },
            grid: {
                top: '10%',
                left: "75%",
                containLabel: false
            },
            yAxis: [{
                type: 'category',
                // inverse: true,   //Y轴坐标逆序显示
                min: -13,
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
                        fontSize: 12,
                    },
                    show: true
                },
                data: prams.data
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
                    option={this.getOption({ data: [33, 25, 12, 90, 55], names: ["在库文物数量", "布展文物数量", "外出巡展文物数量", "外部文物数量", "馆内文物展览数量"] })}
                    style={{ height: "90%" }}
                />
        );
    }
}

export default AntiqueStatics;