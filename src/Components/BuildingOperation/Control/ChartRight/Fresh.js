import React, { PureComponent } from 'react';
import style from "../../BuildingOperation.module.css";
import rightStyle from "./FreshRight.module.css";
import { Slider, Progress } from "antd";

export default class FreshChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 30,
            systemStop: 0,
            newAirControl: 0,
            seasonSwitch: 0,
            minWater: 25,
            newWindControl: 30,
            newWaterControl: 20
        }
    }
    input_change(e) {
        if ((e.target.value <= 100) && (e.target.value >= 0)) {
            this.setState({
                inputValue: e.target.value
            })
        } else {
            this.setState({
                inputValue: (e.target.value > 100) ? 100 : 0
            })
        }
    }
    change(which, now) {
        // eslint-disable-next-line default-case
        switch (which) {
            case "systemStop": {
                if (this.state.systemStop !== now) {
                    this.setState({
                        systemStop: now
                    });
                }
                break;
            }
            case "newAirControl": {
                if (this.state.newAirControl !== now) {
                    this.setState({
                        newAirControl: now
                    });
                }
                break;
            }
            case "seasonSwitch": {
                if (this.state.seasonSwitch !== now) {
                    this.setState({
                        seasonSwitch: now
                    });
                }
                break;
            }
            case "minWater": {
                this.setState({
                    minWater: now
                })
                break;
            }
            case "newWindControl": {
                this.setState({
                    newWindControl: now
                })
                break;
            }
            case "newWaterControl": {
                this.setState({
                    newWaterControl: now
                })
                break;
            }
        }

    }
    render() {
        return (
            <div className={style.chartAreaNoTitle}>
                <div className={rightStyle.rightWhole}>
                    <div>
                        <div>系统启停</div>
                        <div className={rightStyle.switchButtons}>
                            <div
                                style={(this.state.systemStop) ? {} : { background: "rgb(0, 83, 229)" }}
                                onClick={this.change.bind(this, "systemStop", 0)}>运行</div>
                            <div
                                style={(this.state.systemStop) ? { background: "rgb(0, 83, 229)" } : {}}
                                onClick={this.change.bind(this, "systemStop", 1)}>停止</div>
                        </div>
                    </div>
                    <div>
                        <div>新风机组送风机启动控制</div>
                        <div className={rightStyle.switchButtons}>
                            <div
                                style={(this.state.newAirControl) ? {} : { background: "rgb(0, 83, 229)" }}
                                onClick={this.change.bind(this, "newAirControl", 0)}>运行</div>
                            <div
                                style={(this.state.newAirControl) ? { background: "rgb(0, 83, 229)" } : {}}
                                onClick={this.change.bind(this, "newAirControl", 1)}>停止</div>
                        </div>
                    </div>
                    <div>
                        <div>送风温度设定</div>
                        <div className={rightStyle.controlItems}>
                            <div>
                                <Progress percent={Number(this.state.inputValue)} status="active" showInfo={false}
                                    style={{ width: "65%" }}
                                    strokeColor={{
                                        '0%': 'rgb(11,110,239)',
                                        '100%': 'rgb(28,244,249)'
                                    }} />
                            </div>
                            <div>
                                <input type='text' value={this.state.inputValue} onChange={this.input_change.bind(this)}></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>季节模式切换</div>
                        <div className={rightStyle.switchButtons}>
                            <div
                                style={(this.state.seasonSwitch) ? {} : { background: "rgb(0, 83, 229)" }}
                                onClick={this.change.bind(this, "seasonSwitch", 0)}>夏季</div>
                            <div
                                style={(this.state.seasonSwitch) ? { background: "rgb(0, 83, 229)" } : {}}
                                onClick={this.change.bind(this, "seasonSwitch", 1)}>冬季</div>
                        </div>
                    </div>
                    <div>
                        <div>Mismatch报警复位</div>
                        <div className={rightStyle.switchButtons}>
                            <button>复位</button>
                        </div>
                    </div>
                    <div>
                        <div>水阀最小设定</div>
                        <div className={rightStyle.controlItems}>
                            <div>
                                <Slider
                                    defaultValue={this.state.minWater}
                                    style={{ width: "65%" }}
                                    value={typeof this.state.minWater === 'number' ? this.state.minWater : 0}
                                    onChange={this.change.bind(this, "minWater")}
                                />
                            </div>
                            <div>
                                {this.state.minWater}HZ
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>新风机组新风阀调节控制</div>
                        <div className={rightStyle.controlItems}>
                            <div>
                                <Slider
                                    defaultValue={this.state.newWindControl}
                                    style={{ width: "65%" }}
                                    value={typeof this.state.newWindControl === 'number' ? this.state.newWindControl : 0}
                                    onChange={this.change.bind(this, "newWindControl")}
                                />
                            </div>
                            <div>
                                {this.state.newWindControl}HZ
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>新风机组水阀调节控制</div>
                        <div className={rightStyle.controlItems}>
                            <div>
                                <Slider
                                    defaultValue={this.state.newWaterControl}
                                    style={{ width: "65%" }}
                                    value={typeof this.state.newWaterControl === 'number' ? this.state.newWaterControl : 0}
                                    onChange={this.change.bind(this, "newWaterControl")}
                                />
                            </div>
                            <div>
                                {this.state.newWaterControl}HZ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
