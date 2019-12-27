import React from "react";
import "./Comment.css";
import ReactEcharts from "echarts-for-react";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getOption = () => {
        return {
            width: "100%",
            height: "100%",
            polar: [
                {
                    center: ['50%', '50%'],
                    radius: "70%",
                    nameGap: 3,
                    name: {
                        show: true,
                        formatter: null,
                        fontSize: "10"
                    },
                    indicator: [
                        { text: '美食', max: 600 },
                        { text: '酒店', max: 500 },
                        { text: '服务', max: 300 },
                        { text: '体验', max: 380 },
                        { text: '风景', max: 520 },
                        { text: '交通', max: 250 },
                        { text: '其他', max: 380 },
                        { text: '价格', max: 520 },
                        { text: '环境', max: 250 },
                        { text: '人气', max: 250 }
                    ],
                    axisLine: {
                        lineStyle: {
                            color: "rgb(11,110,239)"
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ["rgba(0,0,0,0)"]  // 图表背景网格的颜色
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: 'rgb(11,110,239)' // 图表背景网格线的颜色
                        }
                    }
                }
            ],
            toolTip: {
                show: true,
                trigger: 'item'
            },
            calculable: true,
            series: [
                {
                    name: '预算 vs 开销',
                    type: 'radar',
                    axisLine: {
                        lineStyle: {
                            color: "rgb(11,110,239)"
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: "rgb(11,110,239)"
                        }
                    },
                    data: [
                        {
                            value: [430, 100, 100, 20, 300, 90, 100, 100, 20, 300, 90],
                            name: '预算分配',
                            symbol: "none",
                            areaStyle: {
                                normal: {
                                    color: "rgba(28,244,249)"
                                }
                            }
                        },
                        {
                            value: [200, 140, 200, 70, 60, 200, 200, 140, 200, 70, 60],
                            name: '实际开销',
                            symbol: "none",
                            areaStyle: {
                                normal: {
                                    color: "rgba(0,83,229,0.8)"
                                }
                            }
                        },
                        {
                            value: [200, 200, 130, 100, 150, 200, 200, 130, 100, 150, 200],
                            name: '开销',
                            symbol: "none",
                            areaStyle: {
                                normal: {
                                    color: "rgba(128,115,223,0.8)"
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
            <div className="home-left-commentWhole">
                <div className="home-left-comment-rates">
                    <div className="home-left-commentRate">
                        <button>好评率</button>
                        <button>[&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#1CF4F9" }}>97%</span>&nbsp;&nbsp;&nbsp;&nbsp;]</button>
                        <button>差评率</button>
                        <button>[&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#1CF4F9" }}>3%</span>&nbsp;&nbsp;&nbsp;&nbsp;]</button>
                        <button>平均分</button>
                        <button>[&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#1CF4F9" }}>96</span>&nbsp;&nbsp;&nbsp;&nbsp;]</button>
                    </div>
                </div>
                <div className="home-left-commentChart">
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ height: "90%" }}
                    />
                </div>
            </div>
        )
    }
}
export default Comment;