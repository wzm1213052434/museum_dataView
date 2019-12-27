import React from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";
import style from "./ChartRight.module.css";

var man = [10, 52, 200, 334, 390, 330];
var woman = [200, 334, 390, 330, 10, 52];
export default class VisitorFlowRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectButton: 0,
            selectChoice: man
        }
    }
    handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "男厕": {
                this.setState({
                    selectButton: 0,
                    selectChoice: man
                })
                break;
            }
            case "女厕": {
                this.setState({
                    selectButton: 1,
                    selectChoice: woman
                })
                break;
            }
            default: { }
        }
    }
    getOption = () => {
        return {
            height: "85%",
            grid: {
                left: '6%',
                top: '15%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1h', '2h', '3h', '4h', '5h', '>6h'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgb(0,110,227)"
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: "人",
                    axisLine: {
                        lineStyle: {
                            color: "rgb(0,110,227)"
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: "50%",
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            1, 1, 1, 0,
                            [
                                { offset: 0, color: 'rgb(10,102,238)' },
                                { offset: 1, color: 'rgb(28,244,249)' }
                            ]
                        )
                    },
                    label: {
                        show: "true",
                        position: "top",
                        color: "rgb(28, 244, 249)"
                    },
                    data: this.state.selectChoice
                }
            ]
        }
    }
    render() {
        return (
            <div style={{ width: "100%", height: "99%" }}>
                <div className={style.chartUp}>
                    <button
                        className={style.buttonGroup}
                        style={(this.state.selectButton === 0) ? {} : { background: "rgba(2,48,115,0.6)" }}
                        onClick={this.handleButtonClick}
                    >男厕</button>
                    <button
                        className={style.buttonGroup}
                        style={(this.state.selectButton === 1) ? {} : { background: "rgba(2,48,115,0.6)" }}
                        onClick={this.handleButtonClick}
                    >女厕</button>
                </div>
                <div className={style.chartDown}>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ width: "99%", height: "99%" }}
                    >
                    </ReactEcharts>
                </div>
            </div>
        )
    }
}