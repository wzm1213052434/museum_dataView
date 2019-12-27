import React from "react";
import ReactEcharts from "echarts-for-react";

//字体根据分辨率自适应
function fontSize(res) {
    let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}


const labelShow = {   //文本设置
    normal: {
        formatter: '{c|{c}}\n{a}',
        fontSize: fontSize(0.16),
        rich: {
            c: {
                color: "white"
            }
        }
    }
};
const labelLineShow = {    //引导线设置
    normal: {
        show: true,   //引导线显示
        length: 30,
        length2: 20
    }
};
const placeHolderStyle = {
    normal: {
        formatter: '\t\t{c|{c}}\n{a}',
        color: 'rgba(0,0,0,0)',
        label: { show: false },
        labelLine: { show: false },
        rich: {
            c: {
                color: 'rgba(0,0,0,0)',
                fontSize: 10
            }
        }

    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
}

class AudienceTotal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getStatics = () => {
            let res = [];
            let radiusCount = 60 / params.data.length;
            let radius = 30;
            let colorList = ["rgb(0,83,229)", "rgb(0,110,227)", "rgb(0,138,238)", "rgb(0,188,255)", "rgb(28,244,249)"]
            for (let i = 0; i < params.data.length; i++) {
                res.push(
                    {
                        name: params.names[i],
                        type: 'pie',
                        center: ["45%", "35%"],
                        clockWise: true,
                        startAngle: 0, //起始角度
                        radius: [radius + "%", (radius + radiusCount) + "%"],
                        data: [
                            {
                                value: params.data[i],
                                name: params.names[i],
                                label: labelShow,
                                labelLine: labelLineShow,
                                itemStyle: {
                                    normal: {
                                        color: colorList[i]
                                    }
                                }
                            },
                            {
                                value: 100 - params.data[i],
                                itemStyle: placeHolderStyle
                            }
                        ]
                    }
                );
                radius += radiusCount;
            }

            return res;
        }
        return {
            width: "100%",
            height: "100%",
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c}"
            },
            legend: {
                show: false,
                data: params.names,
            },
            series: getStatics()
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [90, 65, 50, 25, 10], names: ["数量全部", "年统计", "月统计", "7日统计", "今日统计"] })}
                style={{ height: "90%", width: "100%" }}
            />
        );
    }
}

export default AudienceTotal;