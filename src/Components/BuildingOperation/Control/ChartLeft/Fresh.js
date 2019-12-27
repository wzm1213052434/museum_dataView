import React, { PureComponent } from 'react';
import style from "../../BuildingOperation.module.css";
import styleFresh from "./Fresh.module.css";
import { COMMON_CONST } from "../../Emergency/StyleConst";
import AirFreshHumidity from "./AirFreshHumidity";
import AirFreshTemperature from "./AirFreshTemperature";
import styleControlAir from "./SelfControlAirCondition.module.css"

export default class FreshChartLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: "open",
            activeRunButton: "running",
            activeAutoButton: "auto"
        };
    }
    // open or close
    selectButton = (e) => {
        this.setState({
            activeButton: e.target.id
        })
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }
    // running
    selectRunButton = (e) => {
        this.setState({
            activeRunButton: e.target.id
        })
    }
    getRunButtonStatus = (state) => {
        return this.state.activeRunButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }
    // auto
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
            <div className={style.chartAreaNoTitle}>
                <div className={styleFresh.airFreshLeft}>
                    <div className={styleFresh.airFreshBlocks}>
                        <div className={styleFresh.airFreshSwitchBlocks}>
                            <span className={styleFresh.airFreshSwitchTitle}>新风机组送风机压差开关</span>
                            <div className={styleFresh.airFreshSwitchButtons} >
                                <span id="open" style={this.getButtonStatus('open')} onClick={this.selectButton}>开</span>
                                <span id="close" style={this.getButtonStatus('close')} onClick={this.selectButton}>关</span>
                            </div>
                        </div>
                    </div>
                    <div className={styleFresh.airFreshBlocks}>
                        <div className={styleFresh.airFreshHumidityBlocks}>
                            <div className={styleFresh.airFreshHumidityPie}>
                                <AirFreshHumidity></AirFreshHumidity>
                            </div>
                            <div className={styleFresh.airFreshTitleBlock}>
                                <span className={styleFresh.airFreshHumidityTitle}>新风机组送风湿度</span>
                                <span className={styleFresh.airFreshHumidityValue}>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className={styleFresh.airFreshBlocks}>
                        <div className={styleFresh.airFreshHumidityBlocks}>
                            <div className={styleFresh.airFreshHumidityPie}>
                                <AirFreshTemperature></AirFreshTemperature>
                            </div>
                            <div className={styleFresh.airFreshTitleBlock}>
                                <span className={styleFresh.airFreshHumidityTitle}>新风机组送风温度</span>
                                <span className={styleFresh.airFreshHumidityValue}>25°</span>
                            </div>
                        </div>
                    </div>
                    <div className={styleFresh.airFreshBlocks}>
                        <div className={styleFresh.airFreshSwitchBlocks}>
                            <span className={styleFresh.airFreshSwitchTitle}>新风机组送风运行状态</span>
                            <div className={styleFresh.airFreshRunButtons} >
                                <button  className={styleControlAir.statusBackground} >已运行</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleFresh.airFreshBlocks}>
                        <div className={styleFresh.airFreshSwitchBlocks}>
                            <span className={styleFresh.airFreshSwitchTitle}>新风机组送风机手自动状态</span>
                            <div className={styleFresh.airFreshRunButtons} >
                                <button  className={styleControlAir.statusBackground} >自动</button>
                            </div>
                        </div>
                    </div>
                    <div className={styleFresh.airFreshBlocks}>
                        <div className={styleFresh.airFreshFeedbackBlocks}>
                            <span className={styleFresh.airFreshFrequencyTitle}>新风机组新风阀调节反馈</span>
                            <span className={styleFresh.airFreshFrequencyValue}>65HZ</span>
                        </div>
                    </div>
                    <div className={styleFresh.airFreshBlocks}>
                    <div className={styleFresh.airFreshFeedbackBlocks}>
                            <span className={styleFresh.airFreshFrequencyTitle}>新风机组新风阀调节反馈</span>
                            <span className={styleFresh.airFreshFrequencyValue}>65HZ</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
