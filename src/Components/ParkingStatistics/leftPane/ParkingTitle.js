import React from "react";
import "./ParkingTitle.css";

let mydate = new Date();
let myddy = mydate.getDay(); //获取存储当前日期
let weekday = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
];
const dateTime =
    new Date().getMonth() +
    1 +
    "月" +
    new Date().getDate() +
    "日" +
    "         " +
    weekday[myddy];

class ParkingTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="ParkingTitle">
                <h2 className="titleName">停车场综合统计</h2>
                <div className="titleTimes">
                    <div className="titleDate">{dateTime}</div>
                    <div className="titleTime">
                        {this.state.date.toLocaleTimeString()}
                    </div>
                </div>
            </div>
        );
    }
}
export default ParkingTitle;
