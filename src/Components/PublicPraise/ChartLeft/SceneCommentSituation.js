import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class SceneCommentSituation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption() {
        return {
            backgroundColor: "rgb(0,0,0,0)",
            color: ['rgb(28,244,249)', 'rgb(10,102,238)'],
            legend: {
                show: true,
                bottom: 0,
                right: 0,
                itemWidth: 24,
                itemHeight: 8,
                itemGap: 5,
                orient: "vertical",
                icon: 'rectangle',
                data: ['好评率', '行业平均'],
                textStyle: {
                    fontSize: 14,
                    color: 'rgb(10,102,238)'
                },
            },
            radar: {
                name: {
                    textStyle: {
                        fontSize: 16,
                        color: 'rgb(10,102,238)',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                center: ['50%', '50%'],
                radius: 60,
                startAngle: 108,
                splitNumber: 6,
                indicator: [{
                    name: '美食',
                    max: 100
                },
                {
                    name: '风景',
                    max: 100
                },
                {
                    name: '交通',
                    max: 100
                },
                {
                    name: '其他',
                    max: 100
                },
                {
                    name: '价格',
                    max: 100
                },
                {
                    name: '环境',
                    max: 100
                },
                {
                    name: '人气',
                    max: 100
                },
                {
                    name: '体验',
                    max: 100
                },
                {
                    name: '服务',
                    max: 100
                },
                {
                    name: '酒店',
                    max: 100
                }
                ],
                splitArea: {
                    show: true,
                    areaStyle: { 
                        color: ['rgb(0,0,0,0)'], 
                    }

                },
                axisLine: { 
                    lineStyle: {
                        color: 'rgb(10,102,238)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgb(10,102,238)', 
                        width: 1, 
                    }
                }

            },

            series: [{
                name: '景区评论概况）',
                type: 'radar',
                symbolSize: 0,
                data: [{
                    value: [70, 63, 90, 82, 53, 50, 59, 77, 90, 99],
                    name: '好评率',
                    areaStyle: {
                        normal: {
                            color: 'rgb(28,244,249)'
                        },
                    },


                },
                {
                    value: [50, 74, 88, 91, 42, 61, 89, 70, 73, 51],
                    name: '行业平均',
                    areaStyle: {
                        normal: {
                            color: 'rgb(10,102,238)'
                        },
                    },
                }
                ]
            }]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: "90%", width: "100%"}}
            />
        )
    }
}