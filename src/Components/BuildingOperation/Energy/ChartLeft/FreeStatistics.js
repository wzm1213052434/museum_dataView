import React from "react";
import ReactEcharts from "echarts-for-react";

class FreeStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getColors = function () {
            let colors = ["rgb(0,83,229)"];
            return colors;
        }
        return {
            width: "80%",
            height: "65%",
            grid: {
                top: "18%",
                left: "12%"
            },
            xAxis: {
                type: 'category',
                data: ['费用1', '费用2', '费用3', '费用4', '费用5', '费用6'],
                axisLabel: {
                    margin: 8,
                    fontSize: 12,
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
                name: "万元",
                max: 100,
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
                option={this.getOption({ data: [57, 45, 36, 37, 45, 36] })}
                style={{ height: "90%", width: "100%" }}
            />
        )
    }
}
export default FreeStatistics;