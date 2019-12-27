import React from "react";
import style from "./SelfControlAirCondition.module.css";
import AirConditioningHumidity from "./AirConditioningHumidity";
import AirConditioningConcentration from "./AirConditioningConcentration";
import AirConditioningHumidityPie from "./AirConditioningHumidityPie";
import AirConditioningTemperature from "./AirConditioningTemperature";
import { COMMON_CONST } from "../../Emergency/StyleConst.js";

class SelfControlAirCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: "open",
            activeRunButton: "running",
            activeAutoButton: "auto"
        };
    }

    selectButton = (e) => {
        this.setState({
            activeButton: e.target.id
        })
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    selectRunButton = (e) => {
        this.setState({
            activeRunButton: e.target.id
        })
    }
    getRunButtonStatus = (state) => {
        return this.state.activeRunButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    selectAutoButton = (e) => {
        this.setState({
            activeAutoButton: e.target.id
        })
    }
    getAutoButtonStatus = (state) => {
        return this.state.activeAutoButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    render() {
        return (
            <div className={style.airConditioningLeft}>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <div className={style.airConditioningHumidityPie}>
                            <AirConditioningHumidity></AirConditioningHumidity>
                        </div>
                        <span className={style.airConditioningHumidityTitle}>空调机组送风湿度</span>
                        <span className={style.airConditioningHumidityValue}>65%</span>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <div className={style.airConditioningHumidityPie}>
                            <AirConditioningConcentration></AirConditioningConcentration>
                        </div>
                        <span className={style.airConditioningHumidityTitle}>回风CO₂浓度</span>
                        <span className={style.airConditioningHumidityValue}>25PPM</span>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningSwitchBlocks}>
                        <span className={style.airConditioningSwitchTitle}>空调机组送风机压差开关</span>
                        <div className={style.airConditioningSwitchButtons} >
                            <span id="open" style={this.getButtonStatus('open')} onClick={this.selectButton}>开</span>
                            <span id="close" style={this.getButtonStatus('close')} onClick={this.selectButton}>关</span>
                        </div>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <div className={style.airConditioningHumidityPie}>
                            <AirConditioningHumidityPie></AirConditioningHumidityPie>
                        </div>
                        <span className={style.airConditioningHumidityTitle}>空调机组送风湿度</span>
                        <span className={style.airConditioningHumidityValue}>25%</span>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <div className={style.airConditioningHumidityPie}>
                            <AirConditioningTemperature></AirConditioningTemperature>
                        </div>
                        <span className={style.airConditioningHumidityTitle}>空调机组送风温度</span>
                        <span className={style.airConditioningHumidityValue}>25°</span>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningSwitchBlocks}>
                        <span className={style.airConditioningSwitchTitle}>空调机运行状态</span>
                        <div className={style.airConditioningRunButtons} >
                            <button  className={style.statusBackground} >已运行</button>
                        </div>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <span className={style.airConditioningFrequencyTitle}>空调机组送风机频率反馈</span>
                        <span className={style.airConditioningHumidityValue}>65HZ</span>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningSwitchBlocks}>
                        <span className={style.airConditioningSwitchTitle}>空调机组送风机手自动状态</span>
                        <div className={style.airConditioningRunButtons} >
                            <button className={style.statusBackground}>自动</button>
                        </div>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <div className={style.airConditioningHumidityPie}>
                            <AirConditioningTemperature></AirConditioningTemperature>
                        </div>
                        <span className={style.airConditioningHumidityTitle}>空调机组回风温度</span>
                        <span className={style.airConditioningHumidityValue}>25°</span>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <span className={style.airConditioningFrequencyTitle}>空调机组新风阀调节反馈</span>
                        <span className={style.airConditioningHumidityValue}>65PPM</span>
                    </div>
                </div>
                <div className={style.airConditioningBlocks}>
                    <div className={style.airConditioningHumidityBlocks}>
                        <span className={style.airConditioningFrequencyTitle}>空调机组新风阀调节反馈</span>
                        <span className={style.airConditioningHumidityValue}>65PPM</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelfControlAirCondition;