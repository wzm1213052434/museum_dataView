import React from 'react';
import historyShow from './historyShow.json'
import style from './Content.module.css'

export default class HistoryShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    generateTable = () => {
        return historyShow.map((item,index) => {
            return (
                <tr 
                    key={index} 
                    className={style.tableTr}
                    style={(index % 2 === 1) ? {} : {background:"rgba(0,0,0,0)"}}
                >
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.activityType}</td>
                    <td>{item.activityDate}</td>
                    <td>{item.workNum}</td>
                    <td>{item.audienceNum}</td>
                    <td>{item.activityPlace}</td>
                    <td>{item.wholeName}</td>
                </tr>
            )
        })
    }

    render() {
        return (
                <div className={style.downChart}>
                    <table className={style.collectionTable}>
                        <thead>
                            <tr className={style.tableHeader}>
                                <th>序号</th>
                                <th>活动名称</th>
                                <th>主办单位</th>
                                <th>活动类型</th>
                                <th>活动时间</th>
                                <th>工作人员数</th>
                                <th>观众人数</th>
                                <th>活动地点</th>
                                <th>单位全称</th>
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