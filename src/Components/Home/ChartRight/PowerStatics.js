import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';
class PowerStatics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        return {
            width: "70%",
            height: "55%",
            grid: {
                top: "10%",
                left: "15%"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
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
                type: "value",
                splitLine: {
                    show: false
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
            series: [
                {
                    data: params,
                    type: "line",
                    lineStyle: {
                        color: "rgba(28,244,249,1)"
                    },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            1, 1, 1, 0,
                            [
                                { offset: 1, color: 'rgb(0,138,238)' },
                                { offset: 0, color: 'rgba(0,0,0,0)' }
                            ]
                        )
                    },
                    areaStyle: { normal: {} },
                }
            ]
        };
    };

    render() {
        return (
            <div style={{ height: "100%" }}>
                <ReactEcharts
                    option={this.getOption(this.props.params)}
                    style={{ height: "100%" }}
                />
            </div>
        );
    }
}
export default PowerStatics;