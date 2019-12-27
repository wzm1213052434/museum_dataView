import React from "react";
import ReactEcharts from 'echarts-for-react';

class DevRun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption() {
        return {
            width: "80%",
            height: "60%",
            legend: {
                orient: 'vertical',
                right: "5%",
                bottom: "5%",
                data: ['故障占比', '正常占比'],
                borderRadius: 0,
                itemHeight: 6,
                itemGap: 1
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '45%'],
                    data: [
                        {
                            value: 500,
                            name: '故障占比',
                            itemStyle: {
                                color: "rgb(0, 110, 227)"
                            },
                            label: {
                                formatter: () => {
                                    return 500;
                                }
                            }
                        },
                        {
                            value: 310,
                            name: '正常占比',
                            itemStyle: {
                                color: "rgb(28, 244, 249)"
                            },
                            label: {
                                formatter: () => {
                                    return 310;
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div style={{ height: "90%", width: "100%" }}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "100%" }}
                ></ReactEcharts>
            </div>
        )
    }
}

export default DevRun;