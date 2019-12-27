import React from "react";
import ReactEcharts from 'echarts-for-react';

class FireWetFeelTotals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption = (param) => {
        let getDatas = () => {
            let res = [];
            res.push([
                {
                    value: param.data[0],
                    label: {
                        normal: {
                            show: true,
                            position: "center",
                            formatter: function () {
                                return (param.data[0] / 10 + "%")
                            },
                            textStyle: {
                                fontSize: 22,    //文字的字体大小
                                color: "rgb(255, 255, 255)"
                            }
                        }
                    },
                    labelLine: {
                        show: true,
                        length: 0,
                        length2: 0
                    },
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: "rgb(11, 110, 233)" // 0% 处的颜色
                            },
                            {
                                offset: 1, color: "rgb(28,244,249)" // 100% 处的颜色
                            }],
                            globalCoord: true // 缺省为 false
                        }
                    }
                },
                {
                    value: 1000 - param.data[0],
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0)",
                            label: { show: false },
                            labelLine: { show: false }
                        }
                    }
                }
            ]);
            return res;
        }
        return {
            width: "100%",
            height: "100%",
            tooltip: {
                trigger: 'item',
                formatter: "{d}%"
            },
            series: [
                {
                    name: 'FireWetFeelTotals',
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '50%'],
                    radius: ['50%', '65%'],
                    avoidLabelOverlap: false,  //是否启用防止标签重叠策略
                    hoverAnimation: true,
                    data: getDatas()[0]
                }
            ]
        }
    }


    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [650] })}
                style={{ width: "100%", height: "100%" }}
            />
        )
    }
}

export default FireWetFeelTotals;