import React, { PureComponent } from 'react';
import wholeStyle from "../../BuildingOperation.module.css";
import style from "./ChartRight.module.css";
import rightStyle from "./FreshRight.module.css";
import { Slider } from 'antd';

export default class AirChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            transClick: 0,
            seasonSwitch: 0,
            systemStop: 0,
            conditionerControl: 0,
            resetButton: 0,
            frequencyIncrease:50,
            frostProtection:50,
            returnAirTemp:21,
            leastOpenDegree:50,
            airValve:30,
            waterValve:60,
        };
    }
    change(which, now) {
        // eslint-disable-next-line default-case
        switch (which) {
            case "frequencyIncrease": {
                if (this.state.frequencyIncrease !== now) {
                    this.setState({
                      frequencyIncrease: now
                    });
                }
                break;
            }
            case "frostProtection": {
                if (this.state.frostProtection !== now) {
                    this.setState({
                      frostProtection: now
                    });
                }
                break;
            }
            case "returnAirTemp": {
                if (this.state.returnAirTemp !== now) {
                    this.setState({
                      returnAirTemp: now
                    });
                }
                break;
            }
            case "leastOpenDegree": {
                this.setState({
                  leastOpenDegree: now
                })
                break;
            }
            case "airValve": {
                this.setState({
                  airValve: now
                })
                break;
            }
            case "waterValve": {
                this.setState({
                  waterValve: now
                })
                break;
            }
        }

    }
    changeButton(type, which) {
        // eslint-disable-next-line default-case
        switch (type) {
        case "transClick": {
            if (this.state.transClick === which) {
            } else {
                this.setState({
                    transClick: which
                });
            }
            break;
        }
        case "seasonSwitch": {
            if (this.state.seasonSwitch === which) {
            } else {
                this.setState({
                    seasonSwitch: which
                });
            }
            break;
        }
        case "systemStop": {
            if (this.state.systemStop === which) {
            } else {
                this.setState({
                    systemStop: which
                });
            }
            break;
        }
        case "conditionerControl": {
            if (this.state.conditionerControl === which) {
            } else {
                this.setState({
                    conditionerControl: which
                });
            }
            break;
        }
        case "resetButton": {
            if (this.state.resetButton === which) {
            } else {
                this.setState({
                    resetButton: which
                });
            }
            break;
        }
        }
    }

    render() {
        return (<div className={ wholeStyle.chartAreaNoTitle }>
                  <div className={ style.conditionerRightblocks }>
                    <div>
                      <div style={{ width: "50%",textAlign:"right" }}>水阀开度加档频率设定</div>
                      <div style={{ width: "50%" }} className={rightStyle.controlItems}>
                        <div><Slider 
                          defaultValue={ this.state.frequencyIncrease } 
                          style={{ width: "70%" }}
                          onChange={this.change.bind(this, "frequencyIncrease")}
                          className={ style.conditionerSlider } /></div>
                        <div>
                        {this.state.frequencyIncrease}HZ
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ width: "50%",textAlign:"right" }}>水阀防冻保护开度设定</div>
                      <div style={{ width: "50%" }} className={rightStyle.controlItems}>
                        <div><Slider 
                          defaultValue={ this.state.frostProtection } 
                          style={{ width: "70%" }}
                          onChange={this.change.bind(this, "frostProtection")}
                          className={ style.conditionerSlider } /></div>
                        <div>
                        {this.state.frostProtection} %
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>过渡季节模式</div>
                      <div className={ style.conditionerRightSwitch }>
                        <div style={ this.state.transClick ? {} : {
                                         background: "rgb(11, 110, 239)"
                                     } } onClick={ this.changeButton.bind(this, "transClick", 0) }>过渡季</div>
                        <div style={ this.state.transClick ? {
                                         background: "rgb(11, 110, 239)"
                                     } : {} } onClick={ this.changeButton.bind(this, "transClick", 1) }>非过渡季</div>
                      </div>
                    </div>
                    <div>
                      <div>季节模式切换</div>
                      <div className={ style.conditionerRightSwitch }>
                        <div style={ this.state.seasonSwitch ? {} : {
                                         background: "rgb(11, 110, 239)"
                                     } } onClick={ this.changeButton.bind(this, "seasonSwitch", 0) }>冬季</div>
                        <div style={ this.state.seasonSwitch ? {
                                         background: "rgb(11, 110, 239)"
                                     } : {} } onClick={ this.changeButton.bind(this, "seasonSwitch", 1) }>夏季</div>
                      </div>
                    </div>
                    <div>
                      <div>系统启停</div>
                      <div className={ style.conditionerRightSwitch }>
                        <div style={ this.state.systemStop ? {} : {
                                         background: "rgb(11, 110, 239)"
                                     } } onClick={ this.changeButton.bind(this, "systemStop", 0) }>运行</div>
                        <div style={ this.state.systemStop ? {
                                         background: "rgb(11, 110, 239)"
                                     } : {} } onClick={ this.changeButton.bind(this, "systemStop", 1) }>停止</div>
                      </div>
                    </div>
                    <div>
                      <div>空调机组送风机启停控制</div>
                      <div className={ style.conditionerRightSwitch }>
                        <div style={ this.state.conditionerControl ? {} : {
                                         background: "rgb(11, 110, 239)"
                                     } } onClick={ this.changeButton.bind(this, "conditionerControl", 0) }>运行</div>
                        <div style={ this.state.conditionerControl ? {
                                         background: "rgb(11, 110, 239)"
                                     } : {} } onClick={ this.changeButton.bind(this, "conditionerControl", 1) }>停止</div>
                      </div>
                    </div>
                    <div>
                      <div>Mismatch报警复位</div>
                      <button style={ this.state.resetButton ? {} : {
                                          background: "rgb(11, 110, 239)"
                                      } } onClick={ this.changeButton.bind(this, "resetButton", !this.state.resetButton) } className={ style.conditionerRightButton }>复位</button>
                    </div>
                    <div>
                      <div style={{ width: "50%",textAlign:"right" }}>回风温度设定</div>
                      <div style={{ width: "50%" }} className={rightStyle.controlItems}>
                        <div><Slider 
                        defaultValue={ this.state.returnAirTemp }
                        style={{ width: "70%" }}
                        onChange={this.change.bind(this, "returnAirTemp")} 
                        className={ style.conditionerSlider } /></div>
                        <div>
                        {this.state.returnAirTemp}°C
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ width: "50%",textAlign:"right" }}>新风阀最小开度设定</div>
                      <div style={{ width: "50%" }} className={rightStyle.controlItems}>
                        <div><Slider 
                        defaultValue={ this.state.leastOpenDegree } 
                        style={{ width: "70%" }}
                        onChange={this.change.bind(this, "leastOpenDegree")} 
                        className={ style.conditionerSlider } /></div>
                        <div>
                        {this.state.leastOpenDegree} %
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ width: "50%",textAlign:"right" }}>空调机组新风阀调节控制</div>
                      <div style={{ width: "50%" }} className={rightStyle.controlItems}>
                        <div><Slider 
                        defaultValue={ this.state.airValve } 
                        style={{ width: "70%" }}
                        onChange={this.change.bind(this, "airValve")} 
                        className={ style.conditionerSlider } /></div>
                        <div>
                        {this.state.airValve}L/s
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ width: "50%",textAlign:"right" }}>空调机组新水阀调节控制</div>
                      <div style={{ width: "50%" }} className={rightStyle.controlItems}>
                        <div><Slider 
                        defaultValue={ this.state.waterValve } 
                        style={{ width: "70%" }}
                        onChange={this.change.bind(this, "waterValve")} 
                        className={ style.conditionerSlider } /></div>
                        <div>
                        {this.state.waterValve} In
                        </div>
                      </div>
                    </div>
                  </div>
                </div>);
    }
}
