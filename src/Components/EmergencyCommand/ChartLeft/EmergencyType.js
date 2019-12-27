import React from "react";
import ReactEcharts from "echarts-for-react";
import style from "./Emergency.module.css";
import { COMMON_CONST } from "../../BuildingOperation/Emergency/StyleConst";


var data1 = [6, 5, 4, 4.5, 5.5];
var data2 = [5, 4, 6, 3.5, 4.5];
var data3 = [4, 5, 4, 5.5, 6];

class EmergencyType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: "day",
            selectData: data1,
        };
    }

    selectButton = (e) => {
        this.setState({
            activeButton: e.target.id
        });
        switch(e.target.id) {
            case "day":
                this.setState({
                    selectData: data1
                });
            break;
            case "month":
                this.setState({
                    selectData: data2
                });
            break;
            case "year":
                this.setState({
                    selectData: data3
                });
            break;
            default:
            break;
        }
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    getOption = () => {
        return {
            width: "80%",
            height: "45%",
            grid: {
                top: "25%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                data: ['社会安全事件', '自然灾害事件', '事故灾难事件', '公共卫生事件', '文物安全事件'],
                axisLabel: {
                    margin: 20,
                    fontSize: 12,
                    align: "center",
                    rotate: 15,
                    interval: 0
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
                max: 10,
                min: 0,
                nameTextStyle: {
                    verticalAlign: "bottom",
                    lineHeight: 10
                },
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
                data: this.state.selectData,
                type: 'bar',
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                barMaxWidth: 15,
                itemStyle: {
                    color: "rgb(10,102,238)"
                }
            }]
        };
    };

    render() {
        return (
            <div style={{ height: "95%", width: "100%" }}>
                <div className={style.emergencyButtons}>
                    <button id="day" style={this.getButtonStatus('day')} onClick={this.selectButton}>日</button>
                    <button id="month" style={this.getButtonStatus('month')} onClick={this.selectButton}>月</button>
                    <button id="year" style={this.getButtonStatus('year')} onClick={this.selectButton}>年</button>
                </div>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ height: "90%", width: "100%", marginTop: "-5%" }}
                />
            </div>
        )
    }
}
export default EmergencyType;