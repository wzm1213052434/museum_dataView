import React from 'react';
import style from "./ChartRight.module.css";
const brokenAplist = [
    { name: "AP-00", place: "青铜器展厅点位4", haveConnected: 83, couldConnect: 50 },
    { name: "AP-01", place: "停车场点位3", haveConnected: 79, couldConnect: 0 },
    { name: "AP-02", place: "油画展厅点位2", haveConnected: 26, couldConnect: 176 },
    { name: "AP-03", place: "停车场点位2", haveConnected: 64, couldConnect: 119 },
    { name: "AP-04", place: "历史展厅点位5", haveConnected: 187, couldConnect: 363 },
    { name: "AP-05", place: "青铜器展厅点位1", haveConnected: 290, couldConnect: 58 },
    { name: "AP-06", place: "青铜器展厅点位2", haveConnected: 157, couldConnect: 255 }
]
const normalApList = [
    { name: "AP-07", place: "特殊展厅点位2", haveConnected: 283, couldConnect: 370 },
    { name: "AP-08", place: "青铜器展厅点位1", haveConnected: 152, couldConnect: 121 },
    { name: "AP-09", place: "特殊展厅点位1", haveConnected: 114, couldConnect: 300 },
    { name: "AP-10", place: "特殊展厅点位5", haveConnected: 164, couldConnect: 380 },
    { name: "AP-11", place: "历史展厅点位3", haveConnected: 224, couldConnect: 438 },
    { name: "AP-12", place: "青铜器展厅点位2", haveConnected: 225, couldConnect: 447 },
    { name: "AP-13", place: "停车场点位1", haveConnected: 24, couldConnect: 59 },
    { name: "AP-14", place: "历史展厅点位4", haveConnected: 199, couldConnect: 471 }

]
export default class ApList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectChoice: brokenAplist,
            selectButton: 0
        }
    }
    handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "故障": {
                this.setState({
                    selectChoice: brokenAplist,
                    selectButton: 0
                })
                break;
            }
            case "正常": {
                this.setState({
                    selectChoice: normalApList,
                    selectButton: 1
                })
                break;
            }
            case "全部": {
                this.setState({
                    selectChoice: brokenAplist.concat(normalApList),
                    selectButton: 2
                })
                break;
            }
            default: { }
        }
    }
    generateTable = () => {
        return this.state.selectChoice.map((item, index) => {
            return (
                <tr key={index} className={style.tableRow}>
                    <td className={style.tableBorder}>{item.name}</td>
                    <td className={style.tableBorder}>{item.place}</td>
                    <td className={style.tableBorder}>{item.haveConnected}</td>
                    <td className={style.tableBorder}>{item.couldConnect}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div style={{ width: "100%", height: "90%" }}>
                <div className={style.chartUp}>
                    <button
                        className={style.buttonGroup}
                        style={(this.state.selectButton === 0) ? {} : { background: "rgba(2,48,115,0.6)" }}
                        onClick={this.handleButtonClick}
                    >故障</button>
                    <button
                        className={style.buttonGroup}
                        style={(this.state.selectButton === 1) ? {} : { background: "rgba(2,48,115,0.6)" }}
                        onClick={this.handleButtonClick}
                    >正常</button>
                    <button
                        className={style.buttonGroup}
                        style={(this.state.selectButton === 2) ? {} : { background: "rgba(2,48,115,0.6)" }}
                        onClick={this.handleButtonClick}
                    >全部</button>
                </div>
                <div className={style.chartDown}>
                    <table style={{ height: "99%", width: "100%" }}>
                        <thead>
                            <tr className={style.tableThead}>
                                <th className={style.tableBorder}>AP名称</th>
                                <th className={style.tableBorder}>地点</th>
                                <th className={style.tableBorder}>已连接数量</th>
                                <th className={style.tableBorder}>可连接数量</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.generateTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}