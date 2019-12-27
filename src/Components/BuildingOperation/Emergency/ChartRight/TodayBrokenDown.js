import React from 'react';
import style from "./TodayBrokenDown.module.css";
class TodayBrokenDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ["1#3", "1#4", "1#2", "2#1", "2#2", "2#3", "3#4", "3#1", "3#2", "4#1", ],
            wholeBroken: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            haveRunRate: [1,2,3,5,9,6,5,4,2,3],
            unRunRate: [2,5,6,8,2,0,0,0,0,0],
            runRate: [5,6,8,2,6,2,5,6,5,4],
            brokenRate:["90%","70%","60%","60%","50%","40%","30%","20%","10%","50%"]
        };
    }

    render() {
        const tableInit = this.state.names.map((item, index) => {
            return (
                <tr className={(index % 2 === 0) ? style.TodayBrokenTableEvenRow : ""} key={index * 5}>
                    <td>{index + 1}</td>
                    <td className={style.TodayBrokenTableBorder} >{item}</td>
                    <td className={style.TodayBrokenTableBorder} >{this.state.wholeBroken[index]}</td>
                    <td className={style.TodayBrokenTableBorder} >{this.state.haveRunRate[index]}</td>
                    <td className={style.TodayBrokenTableBorder} >{this.state.unRunRate[index]}</td>
                    <td className={style.TodayBrokenTableBorder} >{this.state.runRate[index]}</td>
                    <td>{this.state.brokenRate[index]}</td>
                </tr>
            )
        });

        return (
            <div className={style.TodayBrokenTable} >
                <table style={{
                    margin: '0 auto',
                    width: "90%",
                    height: "95%",
                    borderTop: "1px rgba(0, 110, 227, 0.5) solid"
                }}>
                    <thead>
                        <tr>
                            <th>排名</th>
                            <th className={style.TodayBrokenTableBorder}>楼栋和楼层</th>
                            <th className={style.TodayBrokenTableBorder}>总故障数</th>
                            <th className={style.TodayBrokenTableBorder}>已处理</th>
                            <th className={style.TodayBrokenTableBorder}>未处理</th>
                            <th className={style.TodayBrokenTableBorder}>运行指数</th>
                            <th>故障占比</th>
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

export default TodayBrokenDown;