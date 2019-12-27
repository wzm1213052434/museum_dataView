import React from 'react';
import style from "./DevManageProperties.module.css";

class DevManageProperties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceNames: ["AHU-01", "AHU-02", "AHU-03", "AHU-04", "AHU-05", "AHU-06", "AHU-07", "AHU-08", "AHU-09", "AHU-10", "AHU-11", "AHU-12", "AHU-13", "AHU-14",],
            runStatus: ["故障","故障","故障","故障","故障","故障","故障","故障","故障","故障","故障","故障","故障","故障"," "," "],
            description: ["热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......","热水阀......",],
            runTime: ["15:58","15:59","16:00","16:01","16:02","16:03","16:05","16:06","16:07","16:08","16:09","16:10","16:11","16:12",],
            processingStatus:["待处理","待处理","待处理","待处理","待处理","待处理","待处理","待处理","待处理","待处理","待处理","待处理","待处理","待处理",]
        };
    }

    render() {
        const tableInit = this.state.deviceNames.map((item, index) => {
            if(index < this.props.lineNum){
                return (
                    <tr className={(index % 2 === 0) ? style.DeviceTableEvenRow : ""} key={index * 5}>
                        <td >{item}</td>
                        <td className={style.DeviceTableContent}>{this.state.runStatus[index]}</td>
                        <td className={style.DeviceTableContent}>{this.state.description[index]}</td>
                        <td className={style.DeviceTableContent}>{this.state.runTime[index]}</td>
                        <td>{this.state.processingStatus[index]}</td>
                    </tr>
                )
            }else {
                return (
                    <tr className={(index % 2 === 0) ? style.DeviceTableEvenRow : ""} key={index * 5}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            }
        });

        if(this.props.lineNum < 5) {
            return(
                <div style={{
                    textAlign: 'center',
                    color: '#ccc',
                }}>暂无该种类型设备报修</div>
            )
        }else{
            return (
            <div className={style.DeviceTable} >
                <table style={{
                    margin: '0 auto',
                    width: "90%",
                    height: "95%",
                    borderTop: "1px rgba(0, 110, 227, 0.5) solid"
                }}>
                    <thead>
                        <tr>
                            <th>设备名称</th>
                            <th className={style.DeviceTableContent}>报警类型</th>
                            <th className={style.DeviceTableContent}>描述</th>
                            <th className={style.DeviceTableContent}>报告时间</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableInit}
                    </tbody>
                </table>
            </div>
        )}
    }
}

export default DevManageProperties;