import React from 'react';
import TableMes from './TableMes';
import { Select, Icon, message, Button, Modal, DatePicker } from 'antd';
import style from "./EmergencyManage.module.css"

const { Option } = Select;
const typesValueList = ["全部", "社会安全事件", "公共安全事件", "自然灾害事件", "事故灾难事件", "文物安全事件", "其他事件"]
const levelsValueList = ["全部", "一般", "较大", "重大", "特别重大"];
const statusValueList = ["全部", "待处理", "应急", "待评估", "归档"];

export default class EmergencyManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTypeValue: "请选择",
            selectedLevelValue: "请选择",
            selectedStatusValue: "请选择",
            selectedNameValue: "",
            transMes: {},
            visible: false
        };
    }

    changeSelectOption = (optionKey, value) => {
        switch (optionKey) {
            case "selectedTypeValue": {
                this.setState({
                    selectedTypeValue: value
                })
                break;
            }
            case "selectedLevelValue": {
                this.setState({
                    selectedLevelValue: value
                })
                break;
            }
            case "selectedStatusValue": {
                this.setState({
                    selectedStatusValue: value
                })
                break;
            }
            default: { }
        }
    }
    handleInput = (e) => {
        this.setState({
            selectedNameValue: e.target.value
        })
    }
    getSelectButtons = (whichOption, defaultValue, icons, optionKey) => {
        let options = (whichOption) => {
            return whichOption.map((item, index) => {
                return (
                    <Option value={item} key={index}>{item}</Option>
                )
            })
        }
        return (
            <Select
                defaultValue={defaultValue}
                size="small"
                suffixIcon={icons}
                dropdownClassName={style.selectDropdownMenu}
                onChange={this.changeSelectOption.bind(defaultValue, optionKey)}
                key={optionKey}
            >
                {options(whichOption)}
            </Select>
        )
    }

    handleSearch = () => {
        let obj = {};
        for (let i in this.state) {
            if (i === "selectedTypeValue" || i === "selectedLevelValue" || i === "selectedStatusValue" || i === "selectedNameValue")
                Object.defineProperty(obj, i, {
                    value: this.state[i]
                })
        }
        this.setState({
            transMes: obj
        })
    }
    emergencyButton = () => {
        this.props.history.push('/emergency-command/online');
    }
    receiveButton = () => {
        this.setState({
            visible: true,
        });
    };
    // 保存
    handleSaveOk = () => {
        message.success('保存成功！', 1.5);
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 2000);
    };
    // 关闭 
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    // 重置
    handleReset = () => {
        this.setState({
            visible: false,
        });
    };

    // 日期选择函数
    onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        const icon = <Icon type="caret-down" style={{ color: "rgb(0, 83, 229)" }} />
        return (
            <div style={{ width: "100%", height: "95%",marginTop:"2%" }}>
                <div className={style.selectButtons}>
                    <div className={style.selectButton}>
                        <span>类型</span>
                        {this.getSelectButtons(typesValueList, this.state.selectedTypeValue, icon, "selectedTypeValue")}
                    </div>
                    <div className={style.selectButton}>
                        <span>等级</span>
                        {this.getSelectButtons(levelsValueList, this.state.selectedLevelValue, icon, "selectedLevelValue")}
                    </div>
                    <div className={style.selectButton}>
                        <span>状态</span>
                        {this.getSelectButtons(statusValueList, this.state.selectedStatusValue, icon, "selectedStatusValue")}
                    </div>
                    <div className={style.selectButton}>
                        <span>名称</span>
                        <input type="text" onChange={this.handleInput} />
                    </div>
                </div>
                <div className={style.operationButton}>
                    <button onClick={this.handleSearch}>查询</button>
                </div>
                <div className={style.operationButton}>
                    <button style={(this.state.selectedStatusValue === "待处理") ? {} : { background: " rgba(0, 110, 227,0.5)", color: "rgba(255, 255, 255,0.7)" }} onClick={(this.state.selectedStatusValue === "待处理") ? this.receiveButton : null}>接报</button>
                    <button style={(this.state.selectedStatusValue === "应急") ? {} : { background: " rgba(0, 110, 227,0.5)", color: "rgba(255, 255, 255,0.7)" }} onClick={(this.state.selectedStatusValue === "应急") ? this.emergencyButton : null}>应急指挥</button>
                    <button>修改</button>
                    <button>删除</button>
                </div>
                <div style={{ width: "100%", height: "75%" }}>
                    <TableMes mes={this.state.transMes} changeBg={this.props.changeBg} changeFloor={this.props.changeFloor}></TableMes>
                </div>

                <Modal
                    title="接报"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    width='58%'
                    footer={[
                        <Button key="back" size="small" type="primary" onClick={this.handleSaveOk}>
                            保存
                        </Button>,
                        <Button key="submit" size="small" type="primary" onClick={this.handleCancel}>
                            关闭
                        </Button>,
                        <Button key="reset" size="small" type="primary" onClick={this.handleReset}>
                            重置
                      </Button>,
                    ]}
                    className={'recieveModalStyle'}
                >
                    <div className={style.modalEvent}>
                        <div className={style.modalEventDetail}>
                            <div className={style.modalEventDetailTitle}>事件详情</div>
                            <div className={style.modalEventLine}></div>
                            <div className={style.modalEventDetailContent}>
                                <div className={style.eventContents}>
                                    <span><span className={style.importantEvent}>*</span> 上 报 人：<input /></span>
                                    <span>上报人电话：<input /></span>
                                    <span>上报时间：<DatePicker onChange={this.onChangeDate} size="small" style={{ width: "56%" }} placeholder="请选择日期" /></span>
                                </div>
                                <div className={style.eventContents}>
                                    <span><span className={style.importantEvent}>*</span> 接 警 人：<input /></span>
                                    <span>接警人电话：<input /></span>
                                    <span>接警时间：<DatePicker onChange={this.onChangeDate} size="small" style={{ width: "56%" }} placeholder="请选择日期" /></span>
                                </div>
                                <div className={style.eventContents}>
                                    <span><span className={style.importantEvent}>*</span> 事件名称：<input /></span>
                                    <span><span className={style.importantEvent}>*</span> 事件地点：<input /></span>
                                    <span className={style.levelSelectDropdown}><span className={style.importantEvent}>*</span> 事件等级：
                                    <Select size="small" placeholder="请选择等级" className={style.levelSelectInModal} style={{ width: '56%' }}>
                                            <Option value="level1">等级1</Option>
                                            <Option value="level2">等级2</Option>
                                            <Option value="level3">等级3</Option>
                                            <Option value="level4">等级4</Option>
                                        </Select>
                                    </span>
                                </div>
                                <div className={style.eventContents}>

                                    <span>发生时间：<DatePicker onChange={this.onChangeDate} size="small" style={{ width: "56%" }} placeholder="请选择日期" /></span>
                                    <span>涉及观众数：<input /></span>
                                    <span></span>
                                </div>
                                <div className={style.eventContents}>
                                    <span className={style.longInput}>预估经济损失：<input /></span>
                                </div>
                                <div className={style.eventContents}>
                                    <span className={style.longInput}>简单描述：<input /></span>
                                </div>
                            </div>
                        </div>
                        <div className={style.modalEventOpinion}>
                            <div className={style.modalEventDetailTitle}>处理意见</div>
                            <div className={style.modalEventLine}></div>
                            <div className={style.operationAdvice}>
                                <div className={style.eventContents}>
                                    <span className={style.longInput}>处理意见：<input /></span>
                                </div>
                                <div className={style.eventContents}>
                                    <span><span className={style.importantEvent}>*</span> 处 理 人：<input /></span>
                                    <span>处理人电话：<input /></span>
                                    <span>处理时间：<DatePicker onChange={this.onChangeDate} size="small" style={{ width: "56%" }} placeholder="请选择日期" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}