import React from "react";
import ReactEcharts from "echarts-for-react";

class RealtimeAudience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getStatics = () => {
            let res = [];
            let radiusCount = 35 / params.data.length;
            let radius = 35;
            let colorList = [ "rgb(28,244,249)", "rgb(0,188,255)", "rgb(0,110,227)"];
            let dataStyle = {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    label: { show: false },
                    labelLine: { show: false }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            }

            for (let i = 0; i < params.data.length; i++) {
                res.push(
                    {
                        type: 'pie',
                        clockWise: false,
                        center: ["50%", "50%"],
                        radius: [radius + "%", radius + radiusCount + "%"],
                        data: [
                            {
                                value: params.data[i],
                                name: params.names[i],
                                label: {
                                    show: false
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
                                },
                            },
                            {
                                value: 100 - params.data[i],
                                name:'invisible',
                                itemStyle: dataStyle
                            }
                        ]
                    }
                );
                radius += radiusCount;
            }
            return res;
        }
        return {
            width: "100%",
            height: "100%",
            title: {
                text: '人员紧密度',
                x: 'center',
                y: 'center',
                textStyle: {
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: "normal"
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} <br/> {c}"
            },
            legend: {
                data: params.names,
                itemHeight: 10,
                orient: 'horizontal',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    color: "rgb(11,110,239)"
                }
            },
            series: getStatics()
        }
    }

    render() {
        return (
                <ReactEcharts
                    option={this.getOption({ data: [90, 70, 90], names: ["人员拥挤", "人员正常", "人员稀少"] })}
                    style={{ height: "90%", width: "100%" }}
                />
        );
    }
}

export default RealtimeAudience;