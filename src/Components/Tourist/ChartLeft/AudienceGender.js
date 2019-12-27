import React from "react";
import ReactEcharts from "echarts-for-react";

class AudienceGender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getColors = function () {
            let colors = ["rgb(0,83,229)", "rgb(0,138,238)", "rgb(0,188,255)"];
            return colors;
        }
        return {
            width: "80%",
            height: "65%",
            grid: {
                top: "20%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                data: ['男观众人数', '女观众人数', '全部人数'],
                axisLabel: {
                    margin: 8,
                    fontSize: 10,
                    align: "center"
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
                max: 1000,
                min: 0,
                nameTextStyle: {
                    verticalAlign: "bottom",
                    lineHeight: 10
                },
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,83,229,1)"
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                data: params.data,
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
                option={this.getOption({ data: [500, 300, 800] })}
                style={{ height: "90%", width: "100%" }}
            />
        )
    }
}
export default AudienceGender;