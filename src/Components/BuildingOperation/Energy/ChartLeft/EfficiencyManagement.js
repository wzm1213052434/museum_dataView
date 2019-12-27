import React from "react";
import ReactEcharts from "echarts-for-react";
import { Progress } from "antd";
import style from "./EfficiencyManagement.module.css";
import echarts from "echarts";

class EfficiencyManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = () => {
        let getDatas = () => {
            let res = [];
            res.push(
                {
                    type: 'pie',
                    selectedMode: false,
                    center: ["50%", "60%"],
                    radius: [0, '55%'],
                    hoverAnimation: false,
                    data: [
                        { value: 245,
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
                        show: true,
                        position: "center",
                        formatter: () => { return "能效比\n\n37%" },
                        color: "rgb(28, 244, 249)",
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    type: 'pie',
                    center: ["50%", "60%"],
                    radius: ['65%', '80%'],
                    hoverAnimation: false,
                    data: [
                        {
                            value: 335,
                            itemStyle: {
                                color: "rgb(0,110,227)"
                            }
                        },
                        {
                            value: 310,
                            itemStyle: {
                                color: "rgba(233,233,233,0.1)"
                            }
                        }
                    ],
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            );
            return res;
        }
        return {
            series: getDatas()
        }
    }
    render() {
        return (
            <div className={style.efficiencyManagement}>
                <div className={style.efficiencyManagementChart}>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ width: "100%", height: "95%" }}
                    >
                    </ReactEcharts>
                </div>
                <div className={style.efficiencyManagementChart}>
                    <div className={style.efficiencyManagementbar}>
                        <div className={style.efficiencyManagementTitle}>总负荷：53667.4KW</div>
                        <Progress percent={40} status="active" showInfo={false}
                            style={{ width: "80%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                    </div>
                    <div className={style.efficiencyManagementbar}>
                        <div className={style.efficiencyManagementTitle}>湿度：53667.4KW</div>
                        <Progress percent={70} status="active" showInfo={false}
                            style={{ width: "80%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default EfficiencyManagement;