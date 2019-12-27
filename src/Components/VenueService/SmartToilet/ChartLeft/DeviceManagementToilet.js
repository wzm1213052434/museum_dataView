import React from "react";
import style from "./SmartToiletList.module.css";

class DeviceManagementToilet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceNames: ["按钮设备1", "按钮设备2", "一键报警第三厕所设备", "按钮设备4", "烟感设备1","按钮设备5","按钮设备6","烟感设备2",],
            warningTime: ["2019-10-15 16:02", "2019-10-15 16:05", "2019-10-15 16:08", "2019-10-15 16:11", "2019-10-15 16:15", "2019-10-15 16:25", "2019-10-15 16:55","2019-10-15 16:35",],
        };
    }

    render() {

        const tableInit = this.state.deviceNames.map((item, index) => {
            return (
                <tr className={style.deviceWarningList} key={index}>
                    <td>{item}</td>
                    <td className={style.tableBorder} >{this.state.warningTime[index]}</td>
                </tr>
            )
        });

        return (
            <div className={style.deviceManagementToiletLayout}>
                <div className={style.deviceManagementToiletStatistic}>
                    <div>
                        <span className={style.deviceStatistic}></span>
                        <span className={style.deviceStatisticTitle}>设备总数：</span>
                        <span className={style.deviceStatisticNum}>1845</span>
                    </div>
                    <div>
                        <span className={style.deviceWarning}></span>
                        <span className={style.deviceStatisticTitle}>警告数量：</span>
                        <span className={style.deviceStatisticNum}>15</span>
                    </div>
                </div>
                <div className={style.deviceManagementToiletList}>
                    <table style={{ margin: '0 auto', width: "95%", borderTop: "1px rgba(0, 110, 227, 0.5) solid", borderBottom: "1px rgba(0, 110, 227, 0.5) solid"}}>
                        <thead>
                            <tr className={style.tableTitle}>
                                <th>告警设备名称</th>
                                <th className={style.tableBorder}>告警时间</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableInit}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default DeviceManagementToilet;