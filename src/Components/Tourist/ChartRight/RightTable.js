import React from "react";
import style from "./RightTable.module.css";
class RightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = [
            {
                region: "北京市",
                count: 500
            }, {
                region: "山东省",
                count: 450
            }, {
                region: "陕西省",
                count: 400
            }, {
                region: "黑龙江省",
                count: 350
            }, {
                region: "河北省",
                count: 300
            }
        ];

        const tableInit = data.map((item, index) => {
            return (
                <tr className={(index % 2 === 0) ? style.rightTableEvenRow : style.rightTableOddRow} key={index * 5}>
                    <td className={style.RightTableFirCol} >{++index}</td>
                    <td className={style.rightTableSecCol} >{item.region}</td>
                    <td className={style.rightTableThrCol} >{item.count}</td>
                </tr>
            )
        });

        return (
            <div className={style.rightTableWhole}>
                <table style={{ margin: '0 auto', width: "90%", height: "90%" }}>
                    <thead>
                        <tr className={style.rightTableTh}>
                            <th className={style.rightTableFirCol}>排名</th>
                            <th className={style.rightTableSecCol}>地区</th>
                            <th className={style.rightTableThrCol}>数量</th>
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
export default RightTable;