import React from "react";
import ReactEcharts from "echarts-for-react";

class FreeProportion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getData = () => {
            let res = [];
            let colorList = ["#66ffff", "#00ffff", "#33ccff", "#3399ff", "#0099ff", "#0066ff"];
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
            legend: {
                // data: params.names,
                data: getData(),
                itemHeight: 10,
                orient: 'vertical',
                right: 'right',
                y: 'bottom',
                textStyle: {
                    fontSize: 12,
                    color: "rgb(11,110,239)"
                }
            },
            series: [{
                type: 'pie',
                center: ["35%", "50%"],
                radius: '80%',
                hoverAnimation: false,   //饼-鼠标移入均不放大
                data: getData(),
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },

            }]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [400, 450, 200, 450, 100, 400], names: ["天棚主机", "天棚水泵", "新风主机", "新风水泵", "地源水泵", "冷却水泵"] })}
                style={{ height: "85%", width: "90%" }}
            />
        );
    }
}
export default FreeProportion;