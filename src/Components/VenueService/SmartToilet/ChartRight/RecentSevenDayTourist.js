import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";
import "../../../../util";

const num = [52, 96, 122, 150, 123, 123, 156];
export default class RecentSevenDayTourist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: num
        }
    }
    getRecentSevenDate = () => {
        let arr = [];
        let today = new Date().Format("MMdd");
        for (let i = 1; i <= 7; i++) {
            arr.push(today);
            let day = new Date(new Date().getTime() - (24 * 60 * 60 * 1000) * i).Format("MMdd");
            today = day;
        }
        return arr;
    }
    getOption() {
        return {
            height: "65%",
            grid: {
                left: "15%",
                top: "15%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.getRecentSevenDate(),
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                }
            },
            yAxis: {
                name: "人",
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                }
            },
            series: [{
                data: this.state.count,
                type: 'line',
                lineStyle: {
                    color: "rgb(28, 244, 249)"
                },
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                areaStyle: { normal: {} },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 1, 0,
                        [
                            { offset: 0, color: 'rgba(0,0,0,0)' },
                            { offset: 1, color: 'rgb(0,102,238)' }
                        ]
                    )
                }
            }]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ width: "100%", height: "99%" }}
            >
            </ReactEcharts>
        )
    }
}