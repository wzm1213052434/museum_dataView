import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';
class StayTime extends React.Component {
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
                top: "15%"
            },
            calculable: true,
            xAxis: [
                {
                    type: "value",
                    boundaryGap: [0, 0.1],
                    axisLine: {
                        lineStyle: {
                            color: "rgb(11,110,239)"
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    splitNumber: 3,
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "category",
                    nameGap: 5,
                    data: [
                        ">=1D",
                        "8H-1D",
                        "8H",
                        "7H",
                        "6H",
                        "5H",
                        "4H",
                        "3H",
                        "2H",
                        "1H"
                    ],
                    name: "时",
                    axisLine: {
                        lineStyle: {
                            color: "rgb(11,110,239)"
                        }
                    },
                    axisLabel: {
                        fontSize: 8
                    }
                }
            ],
            series: [
                {
                    type: "bar",
                    data: [564, 186, 254, 104, 144, 620, 465, 265, 536, 846],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                { offset: 0, color: 'rgb(11,110,239)' },
                                { offset: 1, color: 'rgb(28,244,249)' }
                            ]
                        )
                    },
                    label: {
                        show: "true",
                        position: "right",
                        color: "rgb(28, 244, 249)"
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

export default StayTime;
