import React from "react";
import ReactEcharts from "echarts-for-react";
class SystemStatics extends React.Component {
    constructor(props) {
        super(props);
        this.count = 1;
    }
    getOption = prams => {
        let getColors = function (data) {
            let colors = [];
            for (let i = 0; i < data.length; i++) {
                if ((i % 2) === 0) {
                    colors.push("rgb(28,244,249)");
                } else {
                    colors.push("rgb(0,83,229)");
                }
            }
            return colors;
        }
        return {
            width: "80%",
            height: "65%",
            grid: {
                top: "15%",
                left: "15%"
            },
            xAxis: {
                type: 'category',
                data: ['4-17', '4-18', '4-19', '4-20', '4-21', '4-22', '4-23'],
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
                name: "数量/天",
                nameTextStyle: {
                    verticalAlign: "bottom",
                    lineHeight: -10
                },
                nameLocation: "end",
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,83,229,1)"
                    }
                },
                splitLine: {
                    show: false
                },
                z: 1000,
                axisTick: {
                    show: false
                }
            },
            series: [{
                data: prams.data,
                type: 'bar',
                barWidth: 14,
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                itemStyle: {
                    color: function (params) {
                        let colorList = getColors(prams.data);
                        return colorList[params.dataIndex];
                    }
                }
            }]
        };
    };

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [120, 200, 150, 80, 70, 110, 130] })}
                style={{ height: "90%" }}
            />
        );
    }
}
export default SystemStatics;