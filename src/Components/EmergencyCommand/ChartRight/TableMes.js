import React from 'react';
import style from "./TableMes.module.css";
import eye from "../Image/eyeIcon.png";
import jsons from "./statics.json";
import DetailInfo from "./DetailInfo";

export default class TableMes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,
            clickTr: ""
        };
    }
    changeStateTr = (e) => {
        let lastNode = this.state.clickTr;
        if (lastNode !== "") {
            lastNode.style.background = "rgba(0,0,0,0)";
        }
        e.target.parentNode.style.background = "rgb(0, 110, 227)";
        this.setState({
            clickTr: e.target.parentNode
        })
    }
    produceTableCell = () => {
        let controls = [];
        if (this.props.mes.selectedTypeValue !== "全部" && this.props.mes.selectedTypeValue !== "请选择" && !!this.props.mes.selectedTypeValue) {
            controls.push("selectedTypeValue");
        }
        if (this.props.mes.selectedLevelValue !== "全部" && this.props.mes.selectedLevelValue !== "请选择" && !!this.props.mes.selectedLevelValue) {
            controls.push("selectedLevelValue");
        }
        if (this.props.mes.selectedStatusValue !== "全部" && this.props.mes.selectedStatusValue !== "请选择" && !!this.props.mes.selectedStatusValue) {
            controls.push("selectedStatusValue");
        }
        if (this.props.mes.selectedNameValue !== "全部" && this.props.mes.selectedNameValue !== "请选择" && !!this.props.mes.selectedNameValue) {
            controls.push("selectedNameValue");
        }
        return jsons.map((item, index) => {
            let flag = 1;
            for (let i in controls) {
                if (controls[i] !== "selectedNameValue") {
                    if (this.props.mes[controls[i]] !== item[controls[i]]) {
                        flag = 0;
                    }
                } else {
                    if (item[controls[i]].indexOf(this.props.mes[controls[i]]) === -1) {
                        flag = 0;
                    }
                }
            }
            if (flag) {
                return (
                    <tr className={style.tableTr} key={index * 5}>
                        <td className={style.tableTd} onClick={this.changeStateTr}>{item.selectedNameValue}</td>
                        <td className={style.tableTd} onClick={this.changeStateTr}>{item.selectedTypeValue}</td>
                        <td className={style.tableTd} onClick={this.changeStateTr}>{item.selectedLevelValue}</td>
                        <td className={style.tableTd} onClick={this.changeStateTr}>{item.selectedStatusValue}</td>
                        <td className={style.tableTd}><img src={eye} alt="查看" style={{ width: "1.5em", height: "0.94em" }} onClick={this.clickEye} /></td>
                    </tr>
                )
            } else {
                return (null);
            }
        })
    }

    clickEye = () => {
        this.setState({showDetail:true});
        this.props.changeBg('in');
        this.props.changeFloor(true);
    }

    closeDetail=()=>{
        this.setState({showDetail:false});
        this.props.changeBg('out');
        this.props.changeFloor(false);
    }


    render() {
        return (
            <div className={style.tableWhole}>
                <div className={style.tableCaption}>应急事件列表</div>
                <div className={style.tablePane}>
                    <table className={style.tableContent}>
                        <thead>
                            <tr className={style.tableThr}>
                                <th className={style.tableTh}>应急事件名称</th>
                                <th className={style.tableTh}>类型</th>
                                <th className={style.tableTh}>等级</th>
                                <th className={style.tableTh}>状态</th>
                                <th className={style.tableTh}>查看</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.produceTableCell()}
                        </tbody>
                    </table>
                </div>
                {this.state.showDetail && <DetailInfo closeDetail={this.closeDetail}/>}
            </div>
        )
    }
}