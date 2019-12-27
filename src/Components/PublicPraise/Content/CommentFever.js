import React from "react";
import ReactEcharts from "echarts-for-react";

class CommentFever extends React.Component {
    getOption = (params) => {
        return {
            width: "90%",
            height: "65%",
            grid:{
                left: "5%"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'],
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
            yAxis: [{
                type: 'value',
                name: "{a|     }  {b|热度}",
                nameTextStyle: {
                    rich: {
                        a: {
                            backgroundColor: 'rgb(28,244,249)',
                            height: 10,
                            width: 20,
                            borderRadius: 3
                        },
                        b: {
                            color: 'rgb(10,102,238)',
                            lineHeight: 10
                        }
                    }
                },
                max: 20,
                min: 0,
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
                {
                    type: 'value',
                    name: "{a|     }  {b|满意度}",
                    nameTextStyle: {
                        rich: {
                            a: {
                                backgroundColor: 'rgb(10,102,238)',
                                height: 10,
                                width: 20,
                                borderRadius: 3
                            },
                            b: {
                                color: 'rgb(10,102,238)',
                                lineHeight: 10
                            }
                        }
                    },
                    max: 2,
                    min: 0,
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
                }],
            series: [{
                name: "热度",
                data: params.data[0],
                type: 'line',
                smooth: true,
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear', //设置线性渐变
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: "rgba(28,244,249,1)", // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "rgba(28,244,249,0)" // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    }
                },
                itemStyle: {
                    color: "rgb(28,244,249)"
                }
            }, {
                name: "满意度",
                yAxisIndex: 1,
                data: params.data[1],
                type: 'line',
                smooth: true,
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear', //设置线性渐变
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: "rgba(10,102,238,1)", // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "rgba(10,102,238,0)" // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    }
                },
                itemStyle: {
                    color: "rgba(10,102,238,1)"
                }
            }]
        };
    };

    render() {
        return ( <div style={ { height: "95%" }}>
                   <ReactEcharts option={ this.getOption({
                                              data: [['2', '5', '8', '7', '6', '5', '7', '5', '8', '7', '11', '5', '7', '7', '5', '8', '7', '11', '5',
                                                  '7', '9', '8', '7', '11', '5', '7', '8', '7', '11', '5', '0'], ['1', '1', '1', '0.8', '1', '1', '1',
                                                  '1', '1', '1', '1', '1', '0.8', '1', '1', '1', '1', '1', '1', '1', '1', '0.9', '1', '1', '1', '1',
                                                  '1', '1', '1', '1', '0']]
                                          }) } style={ { height: "100%", width: "100%" } } /> </div> );
    }
}
export default CommentFever;