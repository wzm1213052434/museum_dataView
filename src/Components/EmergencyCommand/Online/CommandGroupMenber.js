import React, { PureComponent } from 'react';
import style from "./CommandGroupMenber.module.css"

export default class CommandGroupMenber extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            names: ["张三", "李四", "王二狗", "赵大彪", "金庸", "古龙", "黄霑", "温瑞安", "王花花"],
            teleNum: ['132XXXX0000', '132XXXX1111', '132XXXX2222', '132XXXX3333', '132XXXX4444', '132XXXX5555', '132XXXX6666', '132XXXX7777', '132XXXX8888'],
            job: ['经理','主管01','主管02','主管03','主管04','主管05','主管06','主管07','主管08',],
        };
    }
    render() {
        const tableInit = this.state.names.map((item, index) => {
            return (
                <tr className={style.commandGroupList} key={index*5}>
                    <td>{item}</td>
                    <td className={style.tableBorder} >{this.state.teleNum[index]}</td>
                    <td className={style.tableBorder} >{this.state.job[index]}</td>
                </tr>
            )
        });

        return (
            <div className={style.memberList} >
                <table style={{
                    margin: '0 auto',
                    width: "90%",
                    height: "85%",
                    borderTop: "1px rgba(0, 110, 227, 0.5) solid",
                    borderBottom: "1px rgba(0, 110, 227, 0.5) solid",
                    overflow: "hidden",
                }}>
                    <thead>
                        <tr className={style.tableTitle}>
                            <th>名称</th>
                            <th className={style.tableBorder}>联系方式</th>
                            <th className={style.tableBorder}>职位</th>
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