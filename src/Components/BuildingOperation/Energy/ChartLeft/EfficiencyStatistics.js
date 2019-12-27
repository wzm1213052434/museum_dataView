import React from "react";
import ReactEcharts from "echarts-for-react";

class EfficiencyStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        return {
            width: "80%",
            height: "65%",
            grid: {
                top: "20%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', '产品1', '产品2', '产品3', '产品4', '产品5', '产品6'],
                axisLabel: {
                    margin: 8,
                    fontSize: 12,
                    align: "center"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,83,229,1)"
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: "等级",
                max: 5,
                min: 0,
                nameTextStyle: {
                    verticalAlign: "bottom",
                    lineHeight: 6
                },
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
                type: 'line',
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                itemStyle: {
                    color: "rgb(28,244,249)"
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',//设置线性渐变
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: "rgb(0,80,255)", // 0% 处的颜色
                            }, {
                                offset: 1, color: "rgb(0,0,0)" // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    }
                }
            }]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: ['2', '3', '3', '4', '4', '2', '1'] })}
                style={{ height: "90%", width: "100%" }}
            />
        );
    }
}
export default EfficiencyStatistics;