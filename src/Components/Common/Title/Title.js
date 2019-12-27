import React, { PureComponent } from 'react';
import  "../../../util";
import style from "./Title.module.css";
import TitleDropDown from "./TitleDropDown"

export default class Title extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timeNow: new Date().Format("HH:mm:ss"),
            dateNow: new Date().Format("yyyy年M月d日") + "\t" + new Date().Format("EEE")
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({
                timeNow: new Date().Format("HH:mm:ss")
            }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div className={style.homeTitleWhole}>
                <div className={style.homeTitleCore}>
                    <div className={style.homeTitleMember}>
                        <div>您好,&nbsp;&nbsp;01号管理员。</div>
                    </div>
                    <div className={style.homeTitleMainTitle}>{this.props.title}</div>
                    <div className={style.homeTitleTime}>
                        <div className={style.homeTitleYearAndWeek}>{this.state.dateNow}</div>
                        <div className={style.homeTitleSecond}>{this.state.timeNow}</div>
                    </div>
                    <div className={style.homeTitleStatus}>
                        <div className={style.homeTitleTemperature}>33°</div>
                        <div className={style.homeTitleAirStatus}>
                            <div style={{ marginBottom: "8%" }}>风级: &nbsp;&nbsp;3级</div>
                            <div style={{ marginTop: "8%" }}>PM值: &nbsp;&nbsp;优</div>
                        </div>
                    </div>
                </div>
                <div className={style.homeTitleIcons}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                { (this.props.options) 
                  && <div className={ style.homeTitleDropdown }>
                    <TitleDropDown options={this.props.options} history={this.props.history} path={this.props.history.location.pathname}></TitleDropDown>
                   </div>
                }
            </div>
        );
    }
}
