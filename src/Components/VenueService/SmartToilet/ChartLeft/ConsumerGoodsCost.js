import React from "react";
import ReactEcharts from "echarts-for-react";

export default class ConsumerGoodsCost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption = (params) => {
        let getData = () => {
            let res = [];
            let colorList = ["rgb(28,244,249)", "rgb(0,188,255)", "rgb(0,110,227)", "rgb(0,83,229)",];
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
            series: [{
                type: 'pie',
                center: ["51%", "55%"],
                radius: '55%',
                hoverAnimation: true,
                data: getData(),
                label: {
                    normal: {
                        show: true,
                        fontSize: 16,
                        color : 'rgb(28,244,249)',
                        formatter: function(params){
                            var str = '';
                            switch(params.name){
                                case '卫生纸':str = params.value+'\n'+params.name;break;
                                case '清洁工具':str = params.value+'\n'+params.name;break;
                                case '洗手液':str = params.value+'\n'+params.name;break;
                                case '灭火器':str = params.value+'\n'+params.name;break;
                                default :str = '';
                            }
                            return str
                        },
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                    }
                },
            }]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption({ data: [253, 102, 65, 11], names: ["卫生纸", "洗手液", "清洁工具", "灭火器"] })}
                style={{ height: "95%", width: "99%" }}
            />
        );
    }
}