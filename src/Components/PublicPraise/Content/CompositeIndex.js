import React from "react";
import ReactEcharts from "echarts-for-react";

class CompositeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        return {
            width: "90%",
            height: "65%",
            grid: {
                left: "5%"
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                name: "指数",
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
                    color: "rgb(10,102,238)"
                }
            }]
        };
    };

    render() {
        return (
            <div style={ { height: "100%", width: "100%" } }>
              <ReactEcharts option={ this.getOption({
                                         data: [68.45, 63.75, 64.94, 68.49, 77.09, 70.17, 82.42, 76.14, 83.40, 80.65, 77.05, 72.17]
                                     }) } style={ { height: "95%" } } />
            </div>

        )
    }
}
export default CompositeIndex;