import React from "react";
import ReactEcharts from "echarts-for-react";

export default class VehicleTypeAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getData = () => {
            let res = [];
            let colorList = ["rgb(28,244,249)", "rgb(0,188,255)", "rgb(0,110,227)", "rgb(0,83,229)",];
            for (let i = 0; i < params.data.length; i++) {
                res.push(
                    {
                        name: params.names[i],
                        value: params.data[i],
                        itemStyle: {
                            normal: {
                                color: colorList[i]
                            }
                        },
                    }
                );
            }
            return res;
        }
        return {
            width: "100%",
            height: "100%",
            tooltip: {
                trigger: 'item',
                formatter: "{b} <br/> {c}"
            },
            series: [
                {
                    type: 'pie',
                    center: ["53%", "50%"],
                    radius: '60%',
                    hoverAnimation: false,
                    data: getData(),
                    label: {
                        normal: {
                            show: true,
                            fontSize: 12,
                            color: 'rgb(28,244,249)',
                            formatter: function (params) {
                                var str = '';
                                switch (params.name) {
                                    case '中巴': str = params.value + '\n' + params.name; break;
                                    case '大巴': str = params.value + '\n' + params.name; break;
                                    case '小车': str = params.value + '\n' + params.name; break;
                                    case '货车': str = params.value + '\n' + params.name; break;
                                    default: str = '';
                                }
                                return str
                            },
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                        }
                    },
                },
                {
                    type: 'pie',
                    center: ["53%", "50%"],
                    radius: '65%',
                    hoverAnimation: true,
                    data: getData(),
                    label: {
                        normal: {
                            show: true,
                            position: 'inner',
                            fontSize: 18,
                            color: '#fff',
                            formatter: function (params) {
                                var str = '';
                                switch (params.name) {
                                    case '中巴': str = Math.round(params.percent)+'%'; break;
                                    case '大巴': str = Math.round(params.percent)+'%'; break;
                                    case '小车': str = Math.round(params.percent)+'%'; break;
                                    case '货车': str = Math.round(params.percent)+'%'; break;
                                    default: str = '';
                                }
                                return str
                            },
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                        }
                    },
                },
            ]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [253, 102, 65, 110], names: ["中巴", "大巴", "小车", "货车"] })}
                style={{ height: "90%", width: "90%" }}
            />
        );
    }
}