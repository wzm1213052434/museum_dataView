import React from 'react';
import ReactEcharts from 'echarts-for-react';
import style from './TicketKind.module.css';
import { COMMON_CONST } from "../../BuildingOperation/Emergency/StyleConst";

const data = [333, 555, 888];
class TicketKind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectChoice: data,
            activeButton: "today",
        };
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }
    selectButton = (e) => {
        if (!e.target.id) {
            return;
        }
        let arr = [];
        for (let i = 0; i < 3; i++) {
            let temp = Math.floor(Math.random() * 800);
            arr.push(temp);
        }
        this.setState({
            activeButton: e.target.id,
            selectChoice: arr
        })
    }
    getDatas = () => {
        let res = [];
        let colorList = ["rgb(0,83,229)", "rgb(0,138,238)", "rgb(28,244,249)"];
        for (let i = 0; i < 3; i++) {
            res.push([
                {
                    value: this.state.selectChoice[i],
                    name: "fir",
                    label: {
                        show: true,
                        position: "center",
                        formatter: () => {
                            return this.state.selectChoice[i];
                        },
                        verticalAlign: "bottom",
                        align: "right"
                    },
                    labelLine: {
                        show: false,
                        length: 0,
                        length2: 0
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[i]
                        }
                    }
                },
                {
                    value: 1000 - this.state.selectChoice[i],
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)',
                            label: { show: false },
                            labelLine: { show: false }
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }
            ]);
        }
        return res;
    }
    generateSeries = () => {
        let arr = [];
        let center = 20;
        let names = ['fir', 'sec', 'thr']
        for (let i = 0; i < 3; i++) {
            arr.push({
                name: names[i],
                type: 'pie',
                clockWise: false,
                center: [center + '%', '50%'],
                radius: ['50%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center'
                    }
                },
                data: this.getDatas()[i]
            })
            center += 30;
        }
        return arr;
    }

    getOption() {
        return {
            series: this.generateSeries()
        }
    }

    render() {
        return (
            <div style={{ marginTop: "2%", height: "90%", width: "100%" }}>
                <div className={style.TicketKindSwitchButtons} onClick={this.selectButton}>
                    <div id="today" style={this.getButtonStatus('today')}>今日</div>
                    <div id="week" style={this.getButtonStatus('week')}>近7日</div>
                    <div id="month" style={this.getButtonStatus('month')}>本月</div>
                    <div id="year" style={this.getButtonStatus('year')}>本年</div>
                </div>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "85%" }}
                >
                </ReactEcharts>
            </div>
        )
    }
}

export default TicketKind;