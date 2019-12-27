import React from 'react';
import ReactEcharts from 'echarts-for-react';
class CheckTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption() {
        return {
            width: "75%",
            height: "70%",
            grid: {
                top: "15%",
                left: "15%"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                axisLine: {
                    lineStyle: {
                        color: "rgb(11,110,239)"
                    }
                }
            },
            yAxis: {
                type: "value",
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgb(11,110,239)"
                    }
                }
            },
            series: [
                {
                    data: [7, 9, 9, 6, 10, 13, 5],
                    type: "line",
                    lineStyle: {
                        color: "rgb(28, 244, 249)"
                    },
                    label: {
                        show: true,
                        position: "top",
                        color: "rgb(28, 244, 249)"
                    },
                    itemStyle: {
                        opacity: 0.5,
                        color: "rgba(0,0,0,0)"
                    }
                }
            ]
        }
    }
    render() {
        return (
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "90%" }}
                ></ReactEcharts>
        )
    }
}

export default CheckTicket;