import React from 'react';
import style from "./ChartRight.module.css";
const routeLines = [
    "青铜器展厅--油画展厅--特殊展厅--历史展厅",
    "特殊展厅--历史展厅--珍宝馆--油画展厅",
    "特殊展厅--珠宝厅--油画展厅--青铜器展厅",
    "青铜器展厅--特殊展厅--油画展厅--历史展厅",
    "特殊展厅--珠宝厅--油画展厅--青铜器展厅"
];
export default class HotRouteLine extends React.Component {

    generateTable = () => {
        return routeLines.map((item, index) => {
            return (
                <tr key={index} className={style.tableRow}>
                    <td className={style.tableBorder}>{index + 1}</td>
                    <td className={style.tableBorder}>{item}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className={style.chartDown} style={{ marginTop: "2%" }}>
                <table style={{ width: "100%", height: "99%" }}>
                    <thead>
                        <tr className={style.tableThead}>
                            <th className={style.tableBorder}>路线排名</th>
                            <th className={style.tableBorder}>路线</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}