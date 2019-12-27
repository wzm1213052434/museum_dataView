import React from "react";
import ReactEcharts from "echarts-for-react";
import style from "./SmartToiletList.module.css";
import echarts from "echarts";
import { COMMON_CONST } from '../../../BuildingOperation/Emergency/StyleConst';

const data = [{
    "value": 101,
    "name": "使用中数量"
}, {
    "value": 210,
    "name": "剩余数量"
}, {
    "value": 10,
    "name": "故障数量"
}];

const data1 = [{
    "value": 120,
    "name": "使用中数量"
}, {
    "value": 180,
    "name": "剩余数量"
}, {
    "value": 21,
    "name": "故障数量"
}];

const data2 = [{
    "value": 90,
    "name": "使用中数量"
}, {
    "value": 221,
    "name": "剩余数量"
}, {
    "value": 20,
    "name": "故障数量"
}];

class SmartToiletList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: "toiletOne",
            selectData: data
        };
    }

    selectButton = (e) => {
        this.setState({
            activeButton: e.target.id
        });
        switch(e.target.id) {
            case "toiletOne":
                this.setState({
                    selectData: data
                });
            break;
            case "toiletTwo":
                this.setState({
                    selectData: data1
                });
            break;
            case "toiletThree":
                this.setState({
                    selectData: data2
                });
            break;
            default:
            break;
        }
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    sum = () => {
        let sum = 0;
        for (let i = 0; i < this.state.selectData.length; i++) {
            sum += this.state.selectData[i].value;
        }
        return sum;
    }

    getOption = () => {
        return {
            title: {
                x: '21%',
                y: '43%',
                textStyle: {
                    color: 'rgb(28,244,249)',
                    fontSize: 20,
                },
                subtextStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: ['rgb(28,244,249)']
                },
            },
            series: [{
                type: 'pie',
                selectedMode: false,
                center: ["50%", "50%"],
                radius: [0, '55%'],
                hoverAnimation: false,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: new echarts.graphic.RadialGradient(
                                0.5, 0.6, 0.5,
                                [
                                    { offset: 0, color: 'rgba(0,0,0,0)' },
                                    { offset: 1, color: 'rgb(0,35,70)' }
                                ]
                            )
                        },
                    }
                ],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                labelLine: {
                    show: false
                },
            },
            {
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                center: ["50%", "50%"],
                radius: ['70%', '90%'],
                color: ['rgb(28,244,249)', 'rgb(0,110,227)', 'rgb(0,83,229)'],

                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{c}',
                        textStyle: {
                            color: 'rgba(0,0,0,0)',
                            fontWeight: 'bold',
                            fontSize: 12
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.state.selectData
            }]
        }
    }

    render() {
        return (
            <div className={style.toiletOverallLayout}>
                <div className={style.toiletButtons}>
                    <button id="toiletOne" style={this.getButtonStatus('toiletOne')} onClick={this.selectButton}>厕所1</button>
                    <button id="toiletTwo" style={this.getButtonStatus('toiletTwo')} onClick={this.selectButton}>厕所2</button>
                    <button id="toiletThree" style={this.getButtonStatus('toiletThree')} onClick={this.selectButton}>厕所3</button>
                </div>
                <div className={style.toiletStatistic}>
                    <div>
                        <ReactEcharts className= {style.maleStyle}
                            option={this.getOption()}
                            style={{ width: "100%", height: "50%"}}
                        ></ReactEcharts>
                        <div className={style.toiletflags}>厕所总数:<span>{this.sum()}</span></div>
                        <div className={style.toiletflags}>使用中数量:<span>{this.state.selectData[0].value}</span></div>
                        <div className={style.toiletflags}>剩余数量:<span>{this.state.selectData[1].value}</span></div>
                        <div className={style.toiletflags}>故障数量:<span>{this.state.selectData[2].value}</span></div>
                    </div>
                    <div>
                        <ReactEcharts className={style.femaleStyle}
                            option={this.getOption()}
                            style={{ width: "100%", height: "50%" }}
                        ></ReactEcharts>
                        <div className={style.toiletflags}>厕所总数:<span>{this.sum()}</span></div>
                        <div className={style.toiletflags}>使用中数量:<span>{this.state.selectData[0].value}</span></div>
                        <div className={style.toiletflags}>剩余数量:<span>{this.state.selectData[1].value}</span></div>
                        <div className={style.toiletflags}>故障数量:<span>{this.state.selectData[2].value}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SmartToiletList;