import React from 'react';
import ReactEcharts from "echarts-for-react";

class LoadAnalysis extends React.Component {
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
                top: "2%"
            },
            height: "98%",
            xAxis: {
                splitNumber: 3,
                axisLabel: {
                    color: "rgb(0,83,229)"
                },
                axisLine: {
                    show: false
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
                data: ['4-11', '4-12', '4-13', '4-14'],
                axisLine: {
                    show: false
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
                    barWidth: 14,
                    data: getData(),
                    label: {
                        show: "true",
                        position: "right",
                        color: "rgb(28, 244, 249)"
                    }
                }
            ]
        }
    }
    render() {
        return (
            <div style={{ height: "90%", width: "100%", marginTop: "2%" }}>
                <div style={{ width: "20%", height: "20px", textAlign: "center", marginLeft: "5%", fontSize: "8px", lineHeight: "20px", color: "white", background: "rgb(0,138,238)" }}>总负荷</div>
                <div style={{ height: "80%", width: "100%" }}>
                    <ReactEcharts
                        option={this.getOption({ data: [1120, 980, 1520, 1200] })}
                        style={{ height: "95%" }}
                    >
                    </ReactEcharts>
                </div>
            </div>
        )
    }
}
export default LoadAnalysis;