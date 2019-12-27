import React from 'react';
import style from "./InviteOnline.module.css";
export default class NewMemberTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    generateTable = () => {
        let jsonArr = [];
        for (let i = 0; i < 50; i++) {
            jsonArr.push({
                name: i,
                tel: "13259869078",
                position: "职位",
                key: i
            })
        }
        let _this = this;
        return (
            <table style={{ width: "90%", height: "100%", margin: "0 auto" }}>
                <thead>
                    <tr className={style.popPaneTableTr} key={-1}>
                        <th></th>
                        <th>名称</th>
                        <th>联系方式</th>
                        <th>职位</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jsonArr.map(function (item, index) {
                            return (
                                <tr className={style.popPaneTableTr} key={index * 5}>
                                    <td className={style.test}>
                                        <label
                                            className={style.checkBoxLabel}
                                            htmlFor={"checkbox" + index}
                                        >
                                            <input
                                                className={style.popPaneCheckbox}
                                                type="checkbox"
                                                id={"checkbox" + index}
                                                onClick={_this.props.changeNewMember.bind(this, item)}
                                            />
                                        </label>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.tel}</td>
                                    <td>{item.position}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <div
                className={style.popOutPane}
                style={this.props.visible ? {} : { display: "none" }}
            >
                <div className={style.popPaneHeader}>
                    <div>新增应急指挥人员</div>
                    <div className={style.popPaneCloseIcon} onClick={this.props.closePane}></div>
                </div>
                <div className={style.popPaneContent}>
                    {this.generateTable()}
                </div>
            </div>
        )
    }
}