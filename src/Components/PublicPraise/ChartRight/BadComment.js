import React from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts"

class BadComment extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption() {
        return {
            height:"65%",
            grid:{
                left:"15%",
                top:"20%"
            },
            xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月'],
            axisLine:{
                lineStyle:{
                    color:"rgb(10,102,238)"
                }
            }
        },
        yAxis: {
            name:"条",
            type: 'value',
            splitLine:{
                show:false
            },
            axisLine:{
                lineStyle:{
                    color:"rgb(10,102,238)"
                }
            }
        },
    series: [{
        data: [2,3,4,2,5,3,5,4,5,3,2,3],
        type: 'line',
        lineStyle:{
            color:"rgb(128,115,223)"
        },
        label: {
            show: "true",
            position: "top",
            color: "rgb(128,115,223)"
        },
        areaStyle: { normal: {} },
        itemStyle:{
            color: new echarts.graphic.LinearGradient(
                            1, 1, 1, 0,
                            [
                                { offset: 0, color: 'rgba(0,0,0,0)' },
                                { offset: 1, color: 'rgb(128,115,223)' }
                            ]
                        )
        }
    }]
        }
    }

    render(){
        return (
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: "100%", height: "90%" }}
                >
                </ReactEcharts>
        )
    }
}
export default BadComment;
