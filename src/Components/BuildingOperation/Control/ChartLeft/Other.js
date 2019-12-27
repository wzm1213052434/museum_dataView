import React, { PureComponent } from 'react';
import styleOther from "./Other.module.css";
import { COMMON_CONST } from "../../Emergency/StyleConst";
import WaterTanksLiquid from "./WaterTanksLiquid";
import style from "./SelfControlAirCondition.module.css";

export default class OtherChartLeft extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeRunButton: "run",
      activeAutoButton: "auto",
      activeButton: "running"
    }
  }

  // run or stop
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

  // running
  selectButton = (e) => {
    this.setState({
      activeButton: e.target.id
    })
  }
  getButtonStatus = (state) => {
    return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
  }

  render() {
    return (
      <React.Fragment>
        <div className="chart-area-one-third">
          <div className="chart-title">排风机</div>
          <div className={styleOther.otherLeftExhaust}>
            <div className={styleOther.exhaustControlBlocks}>
              <div className={styleOther.exhaustControlImage}>
              </div>
              <div className={styleOther.exhaustControlButtonsBlocks}>
                <span className={styleOther.exhaustControlTitle}>排风机启停控制</span>
                <div className={styleOther.exhaustControlButtons} >
                  <span id="run" style={this.getRunButtonStatus('run')} onClick={this.selectRunButton}>运行</span>
                  <span id="stop" style={this.getRunButtonStatus('stop')} onClick={this.selectRunButton}>停止</span>
                </div>
              </div>
            </div>
            <div className={styleOther.exhaustControlStatusBlocks}>
              <span className={styleOther.exhaustControlStatusTitle}>排风机手自动状态</span>
              <div className={styleOther.exhaustControlStatusButtons} >
                <button  className={style.statusBackground} >自动</button>
              </div>
            </div>
            <div className={styleOther.exhaustControlStatusBlocks}>
              <span className={styleOther.exhaustControlStatusTitle}>排风机运行状态</span>
              <div className={styleOther.exhaustControlStatusButtons} >
                <button  className={style.statusBackground} >已运行</button>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-area-one-third">
          <div className="chart-title">送风机</div>
          <div className={styleOther.otherLeftExhaust}>
            <div className={styleOther.exhaustControlBlocks}>
              <div className={styleOther.airSupplyImage}>
              </div>
              <div className={styleOther.exhaustControlButtonsBlocks}>
                <span className={styleOther.exhaustControlTitle}>送风机启停控制</span>
                <div className={styleOther.exhaustControlButtons} >
                  <span id="run" style={this.getRunButtonStatus('run')} onClick={this.selectRunButton}>运行</span>
                  <span id="stop" style={this.getRunButtonStatus('stop')} onClick={this.selectRunButton}>停止</span>
                </div>
              </div>
            </div>
            <div className={styleOther.exhaustControlStatusBlocks}>
              <span className={styleOther.exhaustControlStatusTitle}>送风机手自动状态</span>
              <div className={styleOther.exhaustControlStatusButtons} >
                <button className={style.statusBackground}>自动</button>
              </div>
            </div>
            <div className={styleOther.exhaustControlStatusBlocks}>
              <span className={styleOther.exhaustControlStatusTitle}>送风机运行状态</span>
              <div className={styleOther.exhaustControlStatusButtons} >
                <button  className={style.statusBackground} >已运行</button>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-area-one-third">
          <div className="chart-title">給排水</div>
          <div className={styleOther.otherLeftExhaust}>
            <div className={styleOther.drainImagesBlocks}>
              <div className={styleOther.drainImage}></div>
              <div className={styleOther.drainImageBlock}>
                <span className={styleOther.drainImageTitle}>水箱数量</span>
                <span className={styleOther.drainImageValue}>1310</span>
              </div>
            </div>
            <div className={styleOther.drainBlocks}>
              <div className={styleOther.waterTankLiquid}>
                <span>中央水箱液位</span>
                <WaterTanksLiquid></WaterTanksLiquid>
              </div>
              <div className={styleOther.waterTankLiquid}>
                <span>生活水箱液位</span>
                <WaterTanksLiquid></WaterTanksLiquid>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>);
  }
}
