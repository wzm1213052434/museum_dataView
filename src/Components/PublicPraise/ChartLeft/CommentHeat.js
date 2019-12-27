import React from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";

export default class CommentHeat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.i = 0;

    }
    getOption = () => {
        let data = [{
            "value": 6715,
            "name": "好评"
        }, {
            "value": 773,
            "name": "中评"
        }, {
            "value": 439,
            "name": "差评"
        }];
        const sum = () => {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                sum += data[i].value;
            }
            return sum;
        }
        const percent = () => {
            let sumValue = sum();
            for (let i = 0; i < data.length; i++) {
                let res = data[i].name + " " + data[i].value + " " + Math.floor(data[i].value * 100 / sumValue) + "%";
                Object.defineProperty(data[i], "name", {
                    value: res
                })
            }
        }
        percent();
        return {
            legend: {
                type: 'scroll',
                orient: 'vertical',
                top: 'center',
                right: 'right',
                textStyle: {
                    color: ['rgb(28,244,249)', 'rgb(10,102,238)', 'rgb(128,115,223)'],
                    fontSize: 14,
                },
                data
            },
            series: [
                {
                    type: 'pie',
                    selectedMode: false,
                    center: ["30%", "50%"],
                    radius: [0, '35%'],
                    hoverAnimation: false,
                    data: [
                        { value: 245,
                            itemStyle: {
                                color: new echarts.graphic.RadialGradient(
                                    0.5, 0.6, 0.5,
                                    [
                                        { offset: 0, color: 'rgba(0,0,0,0)' },
                                        { offset: 1, color: 'rgb(0,35,70)' }
                                    ]
                                )
                            },
                        }
                    ],
                    label: {
                        show: true,
                        position: "center",
                        formatter: () => { return "评论总数\n\n"+sum()},
                        color: "rgb(28, 244, 249)",
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                    labelLine: {
                        show: false
                    }
                },{
                type: 'pie',
                hoverAnimation: false,
                selectedMode: 'single',
                center: ["30%", "50%"],
                radius: ['45%', '58%'],
                color: ['rgb(28,244,249)', 'rgb(10,102,238)', 'rgb(128,115,223)', "rgba(250,250,250,0.3)"],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{c}',
                        textStyle: {
                            color: 'rgba(0,0,0,0)',
                            fontWeight: 'bold',
                            fontSize: 12
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }]
        }
    }

    render() {
        return (
            <React.Fragment>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "90%" }}
                ></ReactEcharts>
            </React.Fragment>
        )
    }
}