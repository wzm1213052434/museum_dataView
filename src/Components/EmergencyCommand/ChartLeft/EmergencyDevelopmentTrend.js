import React from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";
import style from "./Emergency.module.css";
import { COMMON_CONST } from "../../BuildingOperation/Emergency/StyleConst";

var xData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
'16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
var data = [6, 5, 7, 8, 8, 8, 7, 10, 7, 6, 6, 9, 8, 2, 6, 6, 8, 7, 6, 7, 9, 8, 5, 6, 4, 7, 8, 8, 10, 5, 6];

var xData1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var data1 = [7, 5, 7, 8, 7, 10, 7, 6, 7, 8, 5, 6];

class EmergencyDevelopmentTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: "month",
            selectDate: xData,
            selectData: data,
        };
    }

    selectButton = (e) => {
        this.setState({
            activeButton: e.target.id
        });
        switch(e.target.id) {
            case "month": {
                this.setState({
                    selectDate: xData,
                    selectData: data
                })
                break;
            }
            case "year": {
                this.setState({
                    selectDate: xData1,
                    selectData: data1
                })
                break;
            }
            default:{}
        }
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    getOption() {

        return {
            height: "60%",
            width: "80%",
            grid: {
                top: "22%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,   // boundaryGap值为false的时候，折线第一个点在y轴上
                data: this.state.selectDate,
                axisLine: {
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                }
            },
            yAxis: {
                name: "数量",
                type: 'value',
                splitLine: {        //网格线
                    show: false
                },
                axisLine: {         //y轴
                    lineStyle: {
                        color: "rgb(10,102,238)"
                    }
                },
                axisTick: {         //y轴刻度线
                    show:false
                },
            },
            series: [{
                data: this.state.selectData,
                type: 'line',
                symbol: 'none',  //这句就是去掉点的  
                lineStyle: {
                    color: "rgb(28,244,249)"
                },
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(10,102,238)"
                },
                areaStyle: { normal: {} },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 1, 0,
                        [
                            { offset: 0, color: 'rgba(0,0,0,0)' },
                            { offset: 1, color: 'rgb(10,102,238)' }
                        ]
                    )
                }
            }]
        }
    }

    render() {
        return (
            <div style={{ height: "90%", width: "100%" }}>
                <div className={style.emergencyButtons}>
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
export default EmergencyDevelopmentTrend;