import React from "react";
import ReactEcharts from 'echarts-for-react';
import wordCloud from 'echarts-wordcloud';

export default class CommentHotWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption(){
        return {
            series: [{
                type: "wordCloud",
                gridSize:20,
                rotationRange: [0, 0, 0, 0],
                sizeRange: [10, 18],
                width:400,
                height:250,
                textStyle: {
                    fontWeight: 'bold',
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 155+100),
                                Math.round(Math.random() * 255)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 8,
                        shadowColor: '#eee'
                    }
                },
                data: [{
                        name: " 藏品丰富",
                        value: 32,
                    },
                    {
                        name: " 自主性",
                        value: 21
                    },
                    {
                        name: " 形式多样",
                        value: 20
                    },
                    {
                        name: " 分享",
                        value: 23
                    },
                    {
                        name: " 收藏",
                        value: 25
                    },
                    {
                        name: " 商店",
                        value: 26
                    },
                    {
                        name: " 量大",
                        value: 25
                    },
                    {
                        name: " 会分享给朋友",
                        value: 27
                    },
                    {
                        name: " 精致",
                        value: 18
                    },
                    {
                        name: " VR",
                        value: 17
                    },
                    {
                        name: " 馆内服务好",
                        value: 26
                    },
                    {
                        name: " 空间大",
                        value: 19
                    },
                    {
                        name: " 缤纷多彩",
                        value: 25
                    },
                    {
                        name: " 图片",
                        value: 17
                    },
                    {
                        name: " 沉浸式体验",
                        value: 24
                    },
                    {
                        name: " 联动",
                        value: 18
                    },
                    {
                        name: " 全息",
                        value: 26
                    },
                    {
                        name: " 保存完好",
                        value: 27
                    },
                    {
                        name: " 商业化少",
                        value: 26
                    },
                    {
                        name: " 值得多次参观",
                        value: 25
                    },
                    {
                        name: " 交通方便",
                        value: 24
                    },
                    {
                        name: " 清楚",
                        value: 23
                    },
                    {
                        name: " 完美",
                        value: 21
                    }
                ],
            }]
        }
    }

    render() {
        return (
                <ReactEcharts
                    option={this.getOption({})}
                    style={{ width: "95%", height: "90%"}}
                ></ReactEcharts>
        )
    }
}