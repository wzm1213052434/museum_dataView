import React from 'react';
import { Input, Slider, Icon } from "antd";
import style from './BroadcastDevice.module.css';
import jsonData from './broadcastList.json';

const { Search } = Input;

class BroadcastDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            broadcastVolumes: [],
            broadcastNames: ''
        };
    }

    // 获取列表元素函数
    broadcastDeviceTableContents = () => {
        return jsonData.map((item, index) => {
            let change = (value) => {
                let volumesArray = this.state.broadcastVolumes;
                volumesArray[index] = value;
                this.setState({
                    broadcastVolumes: volumesArray
                })
            }
            if (item["broadcastName"].indexOf(this.state.broadcastNames) !== -1) {
                return (
                    <tr className={(index % 2 === 0) ? "" : style.broadcastDeviceEvenRows} key={index * 6}>
                        <td>{item.broadcastID}</td>
                        <td className={style.broadcastDeviceContents}>{item.broadcastName}</td>
                        <td className={style.broadcastDeviceContents}>{item.broadcastGroup}</td>
                        <td className={style.broadcastDeviceContents}>{item.broadcastPosition}</td>
                        <td className={style.broadcastDeviceContents}>{item.broadcastIP}</td>
                        <td>
                            <div className={style.broadcastDeviceVolume}>
                                <Icon style={{ color: "white", marginLeft: "2%" }} type="sound" />
                                <div className={style.broadcastDeviceSlider}>
                                    <Slider
                                        defaultValue={item.broadcastVolume}
                                        style={{ width: "90%", textAlign: "center" }}
                                        onChange={change}
                                    />
                                </div>
                                <div>
                                    {this.state.broadcastVolumes[index]}
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            } else {
                return (null);
            }
        })
    }
    //获取广播音量函数 
    broadcastGetVolumes = () => {
        jsonData.forEach((items) => {
            this.state.broadcastVolumes.push(items.broadcastVolume);
        })
    }

    render() {
        // 广播音量函数
        this.broadcastGetVolumes();
        return (
            <div className={style.broadcastDeviceLayout}>
                <div className={style.broadcastDeviceSearch}>
                    <Search className={style.broadcastDeviceSearchInput}
                        placeholder="请输入广播名称"
                        // 改变滚动条后实时更新音量大小的方法
                        onSearch={value => {
                            this.setState({
                                broadcastNames: value
                            })
                        }}
                    />
                </div>
                <div className={style.broadcastDeviceList}>
                    <table className={style.broadcastTable}>
                        <thead>
                            <tr>
                                <th style={{ width: "8%" }}>广播编号</th>
                                <th className={style.broadcastDeviceContents}>广播名称</th>
                                <th className={style.broadcastDeviceContents}>分组</th>
                                <th className={style.broadcastDeviceContents}>广播位置</th>
                                <th className={style.broadcastDeviceContents}>IP地址</th>
                                <th style={{ width: "16%" }}>音量控制</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.broadcastDeviceTableContents()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BroadcastDevice;