import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';

class MalfunctionQuantityEscalator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        return {
            width: "60%",
            height: "50%",
            grid: {
                top: "22%",
                left: "23%"
            },
            xAxis: {
                type: 'category',
                data: ['直梯', '扶梯'],
                axisLabel: {
                    margin: 8,
                    fontSize: 10,
                    align: "center"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,83,229,1)"
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                name: "数量",
                max: 1000,
                min: 0,
                boundaryGap: false,
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
                type: 'bar',
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                barMaxWidth: 15,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: 'rgb(28,244,249)' },
                            { offset: 1, color: 'rgb(0,83,229)' }
                        ]
                    )
                }
            }]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [700, 800] })}
                style={{ height: "85%", width: "100%", marginTop: "10%", marginLeft: "10%" }}
            >
            </ReactEcharts>
        )
    }
}
export default MalfunctionQuantityEscalator;