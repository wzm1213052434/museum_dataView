import React, { PureComponent } from 'react';
import { Select } from 'antd';
import style from "./ExpertsManagement.module.css"

const { Option } = Select;
export default class ExpertsManagement extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            names: ["张三", "李四", '李现'],
            gender: ["男", "女", "男"],
            teleNum: ["132XXXX0000", "132XXXX1111", "133XXXX5678"],
            typeBeGoodAt: [
                "社会安全事件；公共卫生事件；自然灾害事件；事故性灾难事件；文物安全事件；",
                "自然灾害事件；文物安全事件；事故性灾难事件；社会安全事件；公共卫生事件；",
                "自然灾害事件；文物安全事件；事故性灾难事件；社会安全事件；公共卫生事件；"
            ],
        };
    }
    findByMes() {
        console.log("查询按钮!");
    }
    render() {
        const memberInfo = this.state.names.map((item, index) => {
            return (
                <div className={style.expertsDetials} key={index * 5}>
                    <div className={style.expertsName}>姓名：{item}</div>
                    <div className={style.expertsInfo}>
                        <span>性别：{this.state.gender[index]}</span>
                        <span>电话：{this.state.teleNum[index]}</span>
                    </div>
                    <div className={style.expertsSkill}>擅长事故类型：{this.state.typeBeGoodAt[index]}</div>
                </div>
            )
        });

        return (
            <div style={{
                margin: "2% auto 0",
                width: "100%",
                height: "90%",
                overflow: "hidden"
            }}>
                <div className={style.evevtType}>
                    <span style={{ width: "30%" }}>事件类型：</span>
                    <span className={style.eventTypeSelect} style={{ width: "36%" }}>
                        <Select size="small" placeholder="请选择" className={style.typeSelect}>
                            <Option value="type1">社会安全事件</Option>
                            <Option value="type2">公共卫生事件</Option>
                            <Option value="type3">自然灾害事件</Option>
                            <Option value="type4">事故灾难事件</Option>
                            <Option value="type5">文物安全事件</Option>
                            <Option value="type6">其他事件</Option>
                        </Select>
                    </span>
                    <span style={{ width: "30%" }}><button onClick={this.findByMes}>查询</button></span>
                </div>
                <div className={style.expertsInfoPanel}>
                    {memberInfo}
                </div>
            </div>
        )
    }
}