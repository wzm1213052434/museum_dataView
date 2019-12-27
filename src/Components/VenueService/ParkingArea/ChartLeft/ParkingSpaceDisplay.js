import React from 'react';
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import style from './Parking.module.css';

class ParkingSpaceDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption = () => {
        return {
            width: "100%",
            height: "100%",
            tooltip: {
                trigger: 'item',
                formatter: "{d}% <br/> {b}"
            },
            series: [{
                type: 'pie',
                center: ["50%", "50%"],
                radius: '70%',
                clockWise: false,
                hoverAnimation: false,   //饼-鼠标移入均不放大
                data: [
                    {
                        value: 400,
                        name: '总停车位使用率',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: 'rgb(0, 138, 238)' },
                                    { offset: 1, color: 'rgb(28, 244, 249)' }
                                ]
                            )
                        },
                        label: {    //指示线文字
                            show: true,
                            position: 'outside', //标签的位置
                            textStyle: {
                                fontWeight: 400,
                                fontSize: 16,    //文字的字体大小
                                color: 'rgb(28, 244, 249)'
                            },
                            formatter: "{d}% \n {b}",
                        },
                        labelLine: {   //指示线状态
                            show: true,
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                    },
                    {
                        value: 100,
                        name: '总停车位未用率',
                        itemStyle: {
                            color: "rgba(233,233,233,0.2)",
                        },
                        label: {       //指示线文字
                            show: false,
                        },
                        labelLine: {  //指示线状态
                            show: false
                        },
                    }
                ],


            }]
        }
    }

    render() {
        return (
            <div className={style.parkingSpaceDisplay}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ height: "80%", width: "100%" }}
                />
                <div className={style.parkingSpaceDisplayTitle}>车位状况：<span>紧张（正常、充足）</span></div>
            </div>
        );
    }
}

export default ParkingSpaceDisplay;
