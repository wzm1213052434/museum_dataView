import React from "react";
import "./EnvironmentStatics.css";
import { Progress } from "antd";
class EnvironmentStatics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 18,
            humidity: 90,
            tvoc: 0.3,
            methanal: 0.5,
            pm: 66,
            ammonia: 12,
            button: 0
        };
    }

    changeButton(which) {
        this.setState({
            button: which ? 1 : 0
        })
        if (which) {
            this.setState({
                temperature: 30,
                humidity: 73,
                tvoc: 0.6,
                methanal: 0.1,
                pm: 35,
                ammonia: 25
            })
        } else {
            this.setState({
                temperature: 18,
                humidity: 90,
                tvoc: 0.3,
                methanal: 0.5,
                pm: 66,
                ammonia: 12
            })
        }
    }
    render() {
        return (
            <div style={{ height: "90%" }}>
                <div className="home-environment-buttons">
                    <button style={this.state.button ? { background: "rgb(0, 83, 229)" } : {}} onClick={this.changeButton.bind(this, 1)}>室内</button>
                    <button style={this.state.button ? {} : { background: "rgb(0, 83, 229)" }} onClick={this.changeButton.bind(this, 0)}>室外</button>
                </div>
                <div className="home-environment-progresses">
                    <div className="home-environment-progress">
                        <span className="home-environment-subTitle">温度</span>
                        <Progress percent={this.state.temperature} status="active" showInfo={false}
                            style={{ width: "65%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                        <span className="home-environment-value">{this.state.temperature}°</span>
                    </div>
                    <div className="home-environment-progress">
                        <span className="home-environment-subTitle">湿度</span>
                        <Progress percent={this.state.humidity} status="active" showInfo={false}
                            style={{ width: "65%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                        <span className="home-environment-value">{this.state.humidity}%</span>
                    </div>
                    <div className="home-environment-progress">
                        <span className="home-environment-subTitle">TVOC</span>
                        <Progress percent={this.state.tvoc * 100} status="active" showInfo={false}
                            style={{ width: "65%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                        <span className="home-environment-value">{this.state.tvoc}mg/m³</span>
                    </div>
                    <div className="home-environment-progress">
                        <span className="home-environment-subTitle">甲醛</span>
                        <Progress percent={this.state.methanal * 100} status="active" showInfo={false}
                            style={{ width: "65%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                        <span className="home-environment-value">{this.state.methanal}mg/m³</span>
                    </div>
                    <div className="home-environment-progress">
                        <div className="home-environment-subTitle">PM2.5</div>
                        <Progress percent={this.state.pm} status="active" showInfo={false}
                            style={{ width: "65%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                        <span className="home-environment-value">{this.state.pm}ug/m³.5</span>
                    </div>
                    <div className="home-environment-progress">
                        <div className="home-environment-subTitle">氨</div>
                        <Progress percent={this.state.ammonia} status="active" showInfo={false}
                            style={{ width: "65%" }}
                            strokeColor={{
                                '0%': 'rgb(11,110,239)',
                                '100%': 'rgb(28,244,249)'
                            }} />
                        <span className="home-environment-value">{this.state.ammonia}%</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnvironmentStatics;