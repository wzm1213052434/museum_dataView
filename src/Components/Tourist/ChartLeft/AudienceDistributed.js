import React from "react";
import ReactEcharts from "echarts-for-react";
import style from "./AudienceDistributed.module.css";
import { COMMON_CONST } from "../../BuildingOperation/Emergency/StyleConst";

const data = ['04', '06', '06', '09', '09', '05', '04'];
class AudienceDistributed extends React.Component {
    constructor(props) {
        super(props);
        this.count = 1;
        this.state = {
            activeButton: "day",
            selectChoice: data
        };
    }
    getOption = () => {
        return {
            width: "80%",
            height: "50%",
            grid: {
                top: "35%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['14:30', '14:40', '14:50', '15:00', '15:10', '15:20', '15:30'],
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
                name: "数量/天",
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
                data: this.state.selectChoice,
                type: 'line',
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                itemStyle: {
                    color: "rgb(0,83,229)"
                },
                areaStyle: {}
            }]
        };
    };

    selectButton = (e) => {
        if (!e.target.id) {
            return;
        }
        let arr = [];
        for (let i = 0; i < 7; i++) {
            let temp = Math.floor(Math.random() * 9)
            temp = "0" + temp;
            arr.push(temp);
        }
        this.setState({
            activeButton: e.target.id,
            selectChoice: arr
        })
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    render() {
        return (
            <div style={{ height: "90%", width: "100%" }}>
                <div className={style.touristAudienceDistributed} onClick={this.selectButton}>
                    <button id="day" style={this.getButtonStatus('day')}>日</button>
                    <button id="month" style={this.getButtonStatus('month')}>月</button>
                    <button id="year" style={this.getButtonStatus('year')}>年</button>
                </div>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ height: "80%" }}
                />
            </div>
        );
    }
}
export default AudienceDistributed;