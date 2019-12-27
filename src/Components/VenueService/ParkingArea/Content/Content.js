import React, { PureComponent } from 'react';
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';
import chinaJson from 'echarts/map/json/china.json';

echarts.registerMap('china', chinaJson);

var chinaGeoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    '北京市': [116.4551, 40.2539],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "山东": [117.1582, 36.8701],
    "福建": [119.4543, 25.9222],
    "湖南": [113.0823, 28.2568],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]
};
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 0
    }], [{
        name: '内蒙古',
        value: 0
    }], [{
        name: '陕西',
        value: 0
    }], [{
        name: '甘肃',
        value: 0
    }], [{
        name: '新疆',
        value: 0
    }], [{
        name: '西藏',
        value: 0
    }], [{
        name: '四川',
        value: 0
    }], [{
        name: '山东',
        value: 0
    }], [{
        name: '福建',
        value: 0
    }], [{
        name: '湖南',
        value: 0
    }], [{
        name: '海南',
        value: 0
    }], [{
        name: '上海',
        value: 0
    }]
];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [116.4551, 40.2539];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};
var series = [];
[['北京市', chinaDatas]].forEach(function (item) {
    series.push({
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 4,
            trailLength: 0.02,
            symbol: 'arrow',
            symbolSize: 5,
        },
        lineStyle: {
            normal: {
                width: 1,
                opacity: .5,
                curveness: .3,
                color: "rgb(28,244,249)"
            }
        },
        data: convertData(item[1])
    }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 1,
                brushType: 'stroke',
                scale: 1
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, 0],
                    formatter: function (params) {
                        return params.data.name;
                    },
                    fontSize: 13,
                    color: "rgb(0,188,255)"
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 5 + val[2] * 5;
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: 'rgb(28,244,249)'
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    textStyle: {
                        color: "rgb(229,195,69)"
                    },
                    fontSize: 16
                },
                emphasis: {
                    show: true,
                    color: "#f60"
                }
            },
            symbol: 'pin',
            symbolSize: 30,
            data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10]),
            }],
        }
    );
});

export default class VenueServiceParkingContent extends PureComponent {
    getOption = () => {
        return {
            backgroundColor: "rgba(0,0,0,0)",
            geo: {
                map: 'china',
                zoom: 1.1,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        color: 'rgb(2,48,115)',
                        borderColor: 'rgb(0,188,255)',
                        borderWidth: 1
                    },
                    emphasis: {
                        color: 'rgb(12,77,142)'
                    }
                }
            },
            series: series,
            color: "rgb(229,195,69)"
        }
    }
    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: "90%", position: "relative", top: "5%"}}
            />
        );
    }
}
