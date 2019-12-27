import React, { PureComponent } from 'react';
import PowerStatics from "./PowerStatics";
import style from "./ChartRight.module.css";
import SystemStatics from "./SystemStatics";
import airImg from '../Image/conditionerIcon.png';
import videoImg from '../Image/videoIcon.png';
import pumpImg from '../Image/pumpIcon.png';
import sensorImg from '../Image/sensorIcon.png';

const DEVICE_STATE = {
    air: {
        img: airImg,
        count: 333,
        state: '运行',
        stateStyle:{background: "rgb(28,244,245)", border: "none", outline: "none" }
    },
    video: {
        img: videoImg,
        count: 456,
        state: '停止',
        stateStyle:{background: "rgb(255,2,2)", border: "none", outline: "none" }
    },
    pump: {
        img: pumpImg,
        count: 240,
        state: '运行',
        stateStyle:{background: "rgb(28,244,245)", border: "none", outline: "none" }
    },
    sensor: {
        img: sensorImg,
        count: 542,
        state: '停止',
        stateStyle:{background: "rgb(255,2,2)", border: "none", outline: "none" }
    }
}
export default class HomeChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            deviceState: DEVICE_STATE['air'],
            activeDeviceButton: 'air',
            activeEnergyButton: 'consumption',
            data: [30, 60, 50, 70, 80, 60, 80]
        };
    }

    onClickDevicesButton = (e) => {
       this.setState({deviceState:DEVICE_STATE[e.target.name],activeDeviceButton:e.target.name}); 
    }

    onClickEnergyButton = (e) => {
       this.setState({activeEnergyButton:e.target.name,data:this.getDatas(e.target.name)})
    }

    getDatas = (name) => {
        if(name === 'consumption'){
            return [30, 60, 50, 70, 80, 60, 80];
        }
        else if(name === 'load'){
            return [130, 60, 70, 20, 50, 90, 100];
        }
        else{
            return [100, 90, 40, 60, 50, 70, 80]
        }
       
    }

    isActiveButton = (name) => {
        if(name === this.state.activeDeviceButton || name === this.state.activeEnergyButton){
            return {background: "rgb(0, 83, 229)"};
        }
        return {};
    }

    render() {
        const videos = [];
        for (let i = 0; i <= 8; i++) {
            videos.push(<div key={ i } className={ style.homeRightVideo }></div>);
        }

        return (
            <div className="chart-right-whole">
              <div className="chart-area">
                <div className="chart-title">视频监控</div>
                <div className={ style.homeRightVideos }>
                  { videos }
                </div>
              </div>
              <div className="chart-area">
                <div className="chart-title">设备运行</div>
                <div className={ style.homeRightSwiftButtons }>
                  <button style={ this.isActiveButton('air') } name='air' onClick={this.onClickDevicesButton}>空调机组</button>
                  <button style={ this.isActiveButton('video') } name='video' onClick={this.onClickDevicesButton}>摄像头机组</button>
                  <button style={ this.isActiveButton('pump') } name='pump' onClick={this.onClickDevicesButton}>水泵机组</button>
                  <button style={ this.isActiveButton('sensor') } name='sensor' onClick={this.onClickDevicesButton}>传感器</button>
                </div>
                <div style={ { height: "20%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" } }>
                  <div style={{ backgroundImage: 'url('+this.state.deviceState.img+')'}} className={ style.homeRightConditionerIcon }></div>
                </div>
                <div className={ style.homeRightDevStatus }>
                  <div style={ { paddingRight: "5%" } }>
                    数量:
                    <br /> 空调机组运行状态:
                  </div>
                  <div style={ { textAlign: "center" } }>
                    [     <span style={ { color: "rgb(28,244,245)", fontWeight: "700" } }>{this.state.deviceState.count}</span>     ]
                    <br />
                    <button style={ this.state.deviceState.stateStyle }>{this.state.deviceState.state}</button>
                  </div>
                </div>
                <div>图s</div>
              </div>
              <div className="chart-area">
                <div className="chart-title">能源数据统计</div>
                <div className={ style.homeRightPowerButtons }>
                  <button style={ this.isActiveButton('consumption') } name='consumption' onClick={this.onClickEnergyButton}>能耗</button>
                  <button style={ this.isActiveButton('load') } name='load' onClick={this.onClickEnergyButton}>负荷</button>
                  <button style={ this.isActiveButton('fees') } name='fees' onClick={this.onClickEnergyButton}>电费</button>
                </div>
                <div style={ { height: "90%" } }>
                  <PowerStatics params={this.state.data}></PowerStatics>
                </div>
              </div>
              <div className="chart-area">
                <div className="chart-title">系统费用统计</div>
                <SystemStatics></SystemStatics>
              </div>
            </div>
            );
    }
}
