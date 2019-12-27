import React from 'react';
import ReactEcharts from "echarts-for-react";

class TodayBrokenUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption(prams) {
        let getData = () => {
            let res = [];
            for (let i = 0; i < prams.data.length; i++) {
                res.push({
                    value: prams.data[i],
                    itemStyle: {
                        color: (i % 2 === 0) ? "rgb(28,244,249)" : "rgb(0,83,229)"
                    }
                })
            }
            return res;
        }
        return {
            grid: {
                containLabel: true,
                top: "2%",
                left: "-5%"
            },
            height: "100%",
            xAxis: {
                splitNumber: 3,
                axisLabel: {
                    color: "rgb(0,83,229)"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgb(0,83,229)"
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: [
                    {
                        value: '已处理故障数量',
                        textStyle: {
                            fontSize: 8
                        }
                    },
                    {
                        value: '未处理故障数量',
                        textStyle: {
                            fontSize: 8
                        }
                    }
                ],
                axisLine: {
                    lineStyle: {
                        color: "rgb(0,83,229)"
                    }
                },
                axisLabel: {
                    color: "rgb(0,83,229)"
                },
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    type: 'bar',
                    data: getData(),
                    label: {
                        show: "true",
                        position: "right",
                        color: "rgb(28, 244, 249)"
                    },
                    barMaxWidth: "40%"
                }
            ]
        }
    }
    render() {
        return (
            <div style={{ height: "95%", width: "100%" }}>
                <div style={{ height: "100%", width: "100%" }}>
                    <ReactEcharts
                        option={this.getOption({ data: [112, 188] })}
                        style={{ height: "95%", width: "100%" }}
                    >
                    </ReactEcharts>
                </div>
            </div>
        )
    }
}
export default TodayBrokenUp;