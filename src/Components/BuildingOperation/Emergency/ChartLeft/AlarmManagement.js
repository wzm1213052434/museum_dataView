import React from "react";
import style from "./AlarmManagement.module.css";
import { Input } from "antd";
import DevManageProperties from "./DevManageProperties";
import { COMMON_CONST } from "../StyleConst";

const { Search } = Input;

class AlarmManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: "select1",
            lineNumber:14
        };
    }

    selectButton = (e) => {
        this.setState({
            activeButton: e.target.id,
            lineNumber:Math.round(Math.random()*14)
        })
    }
    getButtonStatus = (state) => {
        return this.state.activeButton === state ? COMMON_CONST.ButtonActiveStyle : COMMON_CONST.ButtonDefaultStyle
    }

    render() {
        return (
            <div className={style.AlarmManagementLeft}>
                <div className={style.AlarmManagementSearch}>
                    {/* <input className={ style.searchInput}/> */}
                    <Search className={ style.searchInput}
                        placeholder="输入设备号搜索"
                        onSearch={value => console.log(value)}
                    />
                </div>
                <div className={style.AlarmManagementButtons} onClick={this.selectButton}>
                    <span id="select1" style={ this.getButtonStatus('select1') } >消防</span>
                    <span id="select2" style={ this.getButtonStatus('select2') } >空调</span>
                    <span id="select3" style={ this.getButtonStatus('select3') } >新风</span>
                    <span id="select4" style={ this.getButtonStatus('select4') } >送风</span>
                    <span id="select5" style={ this.getButtonStatus('select5') } >排风</span>
                    <span id="select6" style={ this.getButtonStatus('select6') } >安防</span>
                    <span id="select7" style={ this.getButtonStatus('select7') } >污水坑</span>
                </div>
                <div className={style.DeviceProperties}>
                    <DevManageProperties 
                        lineNum={this.state.lineNumber}
                    ></DevManageProperties>
                </div>
            </div>
        )
    }
}

export default AlarmManagement;