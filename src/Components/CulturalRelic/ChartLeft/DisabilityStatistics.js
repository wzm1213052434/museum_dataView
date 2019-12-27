import React from 'react';
import ReactEcharts from "echarts-for-react";

class DisabilityStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption = () => {
        return {
            width: "90%",
            height: "100%",
            tooltip: {
                trigger: 'item',
                formatter: "{d}% <br/> {b}"
            },
            series: [{
                type: 'pie',
                center: ["50%", "50%"],
                radius: '60%',
                hoverAnimation: false,   //饼-鼠标移入均不放大
                data: [
                    {
                        value: 450,
                        name: '缺残',
                        itemStyle: {
                            color: 'rgb(28, 244, 249)'
                        },
                    },
                    {
                        value: 150,
                        name: '完整',
                        itemStyle: {
                            color: 'rgb(0, 138, 238)',
                        },
                    },
                ],
                label: {    //指示线文字
                    show: true,
                    position: 'outside', //标签的位置
                    textStyle: {
                        fontWeight: 600,
                        fontSize: 16,    //文字的字体大小
                        color: 'rgb(28, 244, 249)'
                    },
                    formatter: "{b}: {d}% \n\n",
                    padding: [0, -92],
                },
                labelLine: {   //指示线状态
                    show: true,
                    length: 10,
                    length2: 90
                },
            }]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: "90%", width: "100%"}}
            />
        );
    }
}

export default DisabilityStatistics;