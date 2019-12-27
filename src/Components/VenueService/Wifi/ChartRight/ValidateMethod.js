import React from 'react';
import ReactEcharts from "echarts-for-react";
import style from './ChartRight.module.css'
const today = [
    { name: "微信连接WiFi", rate: 24 },
    { name: "微信认证", rate: 29 },
    { name: "手机短信", rate: 15 },
    { name: "免账号认证", rate: 22 },
    { name: "固定账号认证", rate: 10 }
];
const week = [
    { name: "微信连接WiFi", rate: 24 },
    { name: "微信认证", rate: 34 },
    { name: "手机短信", rate: 10 },
    { name: "免账号认证", rate: 27 },
    { name: "固定账号认证", rate: 5 }
];
const month = [
    { name: "微信连接WiFi", rate: 30 },
    { name: "微信认证", rate: 23 },
    { name: "手机短信", rate: 17 },
    { name: "免账号认证", rate: 20 },
    { name: "固定账号认证", rate: 10 }
];
const colorList = ["rgb(28,244,249)", "rgb(0,188,255)", "rgb(0,138,238)", "rgb(0,110,227)", "rgb(0,83,229)"];
export default class ValidateMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectChoice: today,
            selectButton: 0
        };
    }
    handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "今日": {
                this.setState({
                    selectChoice: today,
                    selectButton: 0
                })
                break;
            }
            case "近一周": {
                this.setState({
                    selectChoice: week,
                    selectButton: 1
                })
                break;
            }
            case "近一月": {
                this.setState({
                    selectChoice: month,
                    selectButton: 2
                })
                break;
            }
            default: { }
        }
    }
    getChartData = () => {
        let arr = [];
        for (let i in this.state.selectChoice) {
            arr.push({
                value: this.state.selectChoice[i].rate,
                name: this.state.selectChoice[i].rate + "%\n" + this.state.selectChoice[i].name + "\n",
                itemStyle: {
                    color: colorList[i]
                }
            })
        }
        return arr;
    }
    getOption = () => {
        return {
            series: [{
                name: '面积模式',
                type: 'pie',
                radius: ["25%", "70%"],
                center: ['50%', '55%'],
                roseType: 'area',
                label: {
                    color: "rgb(28, 244, 249)",
                    fontSize: 12
                },
                data: this.getChartData()
            }]
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
                    >今日</button>
                    <button
                        className={style.buttonGroup}
                        style={(this.state.selectButton === 1) ? {} : { background: "rgba(2,48,115,0.6)" }}
                        onClick={this.handleButtonClick}
                    >近一周</button>
                    <button
                        className={style.buttonGroup}
                        style={(this.state.selectButton === 2) ? {} : { background: "rgba(2,48,115,0.6)" }}
                        onClick={this.handleButtonClick}
                    >近一月</button>
                </div>
                <div className={style.chartDown}>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ height: "99%", width: "99%", margin: "0 auto" }}
                    />
                </div>
            </div>
        )
    }
}