import React from "react";
import NewMemberTable from "./NewMemberTable";
import style from "./InviteOnline.module.css";
export default class InviteOnline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popPaneVisible: false,
            newMembers: []
        };
    }
    showNewMembers = () => {
        let arr = this.state.newMembers;
        return (
            <ul className={style.showNewMembersUl}>
                {
                    arr.map(function (item , index) {
                        return (
                            <li key={index * 5}>
                                {item.name + "," + item.tel + "," + item.position}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    changeNewMember = (item) => {
        let newMemberArr = this.state.newMembers;
        let flag = 1;
        for (let i = 0; i < newMemberArr.length; i++) {
            if (newMemberArr[i].key === item.key) {
                newMemberArr.splice(i, 1);
                flag = 0;
                break;
            }
        }
        if (flag) {
            newMemberArr.push(item);
        }
        this.setState({
            newMembers: newMemberArr
        })
    }
    openPopPane = () => {
        this.setState({
            popPaneVisible: true
        })
    }
    closePopPane = () => {
        this.setState({
            popPaneVisible: false
        })
    }
    render() {
        return (
            <div style={{ width: "85%", height: "90%", margin: "0 auto" }}>
                <div className={style.upPane}>
                    <div>邀请人:</div>
                    <button onClick={this.openPopPane}>新增</button>
                </div>
                <div className={style.middlePane}>
                    {this.showNewMembers()}
                </div>
                <div className={style.downPane}>
                    <button>发送短信</button>
                </div>
                <NewMemberTable
                    visible={this.state.popPaneVisible}
                    closePane={this.closePopPane}
                    changeNewMember={this.changeNewMember}
                >
                </NewMemberTable>
            </div>
        )
    }
}