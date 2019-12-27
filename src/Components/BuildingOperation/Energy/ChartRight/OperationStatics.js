import React from 'react';
import style from "./OperationStatics.module.css";
class OperationStatics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ["天棚主机", "天棚水泵", "新风主机", "新风水泵", "地源水泵", "冷却水泵", "地源热泵", "天棚水泵", "新风系统", "热泵系统", "地源系统"],
            electric: [10426.7, 5298.4, 20126.8, 16545.3, 10255.2, 3365.8, 12447.3, 5696.3, 11273.8, 47389.5, 31225.0],
            cost: [5620.3, 4781.3, 7404.7, 4562.8, 8520.3, 7524.3, 10228.9, 5897.4, 15417.4, 8426.0, 16181.0],
            burden: [1.8, 3.5, 6.5, 3.6, 5.1, 2.1, 3.9, 6.8, 3.5, 4.3, 2.7],
            powerCost: [2.3, 2.6, 7.5, 5.0, 3.9, 4.1, 1.8, 4.9, 5.1, 4.9, 6.8]
        };
    }

    render() {
        const tableInit = this.state.names.map((item, index) => {
            return (
                <tr className={(index % 2 === 0) ? style.rightTableEvenRow : ""} key={index * 5}>
                    <td>{item}</td>
                    <td className={style.tableBorder} >{this.state.electric[index]}</td>
                    <td className={style.tableBorder} >{this.state.cost[index]}</td>
                    <td className={style.tableBorder} >{this.state.burden[index]}</td>
                    <td>{this.state.powerCost[index]}</td>
                </tr>
            )
        });

        return (
            <div className={style.OperationTable} >
                <table style={{
                    margin: '0 auto',
                    width: "90%",
                    height: "95%",
                    borderTop: "1px rgba(0, 110, 227, 0.5) solid"
                }}>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th className={style.tableBorder}>总电量</th>
                            <th className={style.tableBorder}>总电费</th>
                            <th className={style.tableBorder}>总负荷</th>
                            <th>平均能耗</th>
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

export default OperationStatics;