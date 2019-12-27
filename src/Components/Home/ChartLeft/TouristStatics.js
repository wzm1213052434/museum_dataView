import React from "react";
import ReactEcharts from "echarts-for-react";
class TouristStatics extends React.Component {
    constructor(props) {
        super(props);
        this.count = 1;
    }
    getOption = prams => {
        let getColors = function () {
            let colors = ["rgb(0,83,229)", "rgb(0,138,238)", "rgb(0,188,255)", "rgb(28,244,249)"];
            return colors;
        }
        return {
            width: "80%",
            height: "60%",
            grid: {
                top: "15%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                data: ['应入馆团体人数', '应入馆散客人数', '已入馆团体人数', '已入馆散客人数'],
                axisLabel: {
                    rotate: 12,
                    margin: 18,
                    fontSize: 12,
                    align: "center",
                    interval: 0,
                },
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
                name: "人数",
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
                label: {
                    show: "true",
                    position: "top",
                    color: "rgb(28, 244, 249)"
                },
                barMaxWidth: 15,
                itemStyle: {
                    color: function (params) {
                        let colorList = getColors();
                        return colorList[params.dataIndex];
                    }
                }
            }]
        };
    };

    render() {
        return (
                <ReactEcharts
                    option={this.getOption({ data: [120, 200, 150, 80] })}
                    style={{ height: "90%", width: "100%"}}
                />
        );
    }
}
export default TouristStatics;