import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';

export default class CulturalRelicLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = () => {
        return {
            width: "70%",
            height: "70%",
            tooltip: {
                trigger: "axis"
            },
            grid: {
                left: "17%",
                top: "17%"
            },
            calculable: true,
            xAxis: [
                {
                    name: '件',
                    type: "value",
                    max: 2000,
                    min: 0,
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: "rgb(10,102,238)"
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    splitNumber: 4,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 14,    //文字的字体大小
                        },
                    }
                }
            ],
            yAxis: [
                {
                    name: '级别',
                    type: "category",
                    nameGap: 5,  //坐标轴名称与轴线之间的距离。
                    data: [
                        "未定级",
                        "三级",
                        "二级",
                        "一级",
                    ],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 12,    //文字的字体大小
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgb(10,102,238)"
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    type: "bar",
                    data: [1120, 980, 1520, 1200],
                    barWidth: 16,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                { offset: 0, color: 'rgb(10,102,238)' },
                                { offset: 1, color: 'rgb(28,244,249)' }
                            ]
                        )
                    },
                    label: {
                        show: "true",
                        position: "right",
                        color: "rgb(28, 244, 249)",
                        textStyle: {
                            fontSize: 16,    //文字的字体大小
                            fontWeight: 500,
                        },
                    }
                }
            ]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ width: "100%", height: "90%" }}
            />
        );
    }
}