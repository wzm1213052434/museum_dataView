import React from "react";
import ReactEcharts from 'echarts-for-react';
import liquidfill from 'echarts-liquidfill'

class WaterTanksLiquid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption = () => {
        return {
            tooltip: {
                trigger: "item"
            },
            series: [{
                type: "liquidFill",
                data: [
                    {
                        value: 0.8,
                        itemStyle: {
                            // color: "rgb(30,177,185)"
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 1, color: "rgb(11, 110, 233)" // 0% 处的颜色
                                },
                                {
                                    offset: 0, color: "rgb(28,244,249)" // 100% 处的颜色
                                }],
                                globalCoord: true // 缺省为 false
                            }
                        }
                    }
                ],
                radius: "60%",
                center: ['50%', '50%'],
                backgroundStyle: {
                    borderWidth: 2,
                    borderColor: "rgb(30,177,185)",
                    color: "rgb(11, 110, 233)"
                },
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 24,
                        }
                    }
                },
                outline: {
                    show: false
                }
            }
            ]
        };
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ width: "100%", height: "100%" }}
            />
        )
    }
}

export default WaterTanksLiquid;