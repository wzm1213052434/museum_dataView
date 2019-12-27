import React from "react";
import ReactEcharts from "echarts-for-react";

class CarFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getOption = () => {
        return {
            width: "60%",
            height: "75%",
            title: {
                text: "车辆来源地TOP5",
                textStyle: {
                    fontSize: 12,
                    color: "rgb(255, 167, 72)"
                }
            },
            tooltip: {
                trigger: "axis"
            },
            grid: {
                left: "28%",
                top: "18%"
            },
            calculable: true,
            xAxis: [
                {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: ["陕西省", "北京市", "上海市", "河南省", "黑龙江省"],
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 8,
                        color: "rgb(90, 245, 250)"
                    }
                }
            ],
            series: [
                {
                    name: "2011年",
                    type: "bar",
                    data: [564, 186, 254, 104, 144],
                    itemStyle: {
                        color: "rgba(90,245,250,0.7)"
                    },
                    label: {
                        show: "true",
                        position: "right",
                        color: "rgb(255, 167, 72)"
                    }
                }
            ]
        };
    };

    render() {
        return (
            <div>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "20vh" }}
                />
            </div>
        );
    }
}

export default CarFrom;
