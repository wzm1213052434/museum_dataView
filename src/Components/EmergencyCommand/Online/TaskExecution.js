import React from 'react';
import style from "./TaskRelease.module.css";

class TaskExecution extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskNames: ["XXXXXXXX", "XXXXXXXX", "XXXXXXXX", "XXXXXXXX", "XXXXXXXX", "XXXXXXXX", "XXXXXXXX"],
            taskStatus: ["已处理", "已处理", "未处理", "已处理", "未处理", "已处理", "已处理"],
            taskContact: ["001", "002", "003", "004", "005", "006", "007"]
        };
    }

    render() {
        const tableInit = this.state.taskNames.map((item, index) => {
            return (
                <tr className={ style.taskExecutionTableList } key={index * 3}>
                    <td>{item}</td>
                    <td className={style.tableBorder} >{this.state.taskStatus[index]}</td>
                    <td>{this.state.taskContact[index]}</td>
                </tr>
            )
        });

        return (
            <div className={style.taskExecutionTable} >
                <table style={{
                    margin: '0 auto',
                    width: "90%",
                    height: "85%",
                    borderTop: "1px rgba(0, 110, 227, 0.5) solid",
                    borderBottom: "1px rgba(0, 110, 227, 0.5) solid"
                }}>
                    <thead>
                        <tr className={style.tableTitle}>
                            <th>任务名称</th>
                            <th className={style.tableBorder}>任务状态</th>
                            <th>联系人</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableInit}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskExecution;