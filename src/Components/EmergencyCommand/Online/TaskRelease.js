import React from "react";
import style from "./TaskRelease.module.css";
import { Select, Input } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

class TaskRelease extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // 发布
    handleRelease = () => {
        console.log("handleRelease");
    };
    // 重置
    handleReset = () => {
        console.log("handleReset");
    };

    render() {
        return (
            <div className={style.taskReleaseModule}>
                <div className={style.taskBasicInformation}>
                    <div className={style.basicInformationContents}>
                        <span className={style.inputLong}>任务名称：<input /></span>
                        <span className={style.inputLong}>任务时限：<input /></span>
                    </div>
                    <div className={style.basicInformationContents}>
                        <span>联系人：&nbsp;&nbsp;&nbsp;<input /></span>
                        <span>优先级：&nbsp;&nbsp;&nbsp;
                            <Select size="small" placeholder="请选择">
                                <Option value="level1">最高</Option>
                                <Option value="level2">较高</Option>
                                <Option value="level3">高</Option>
                                <Option value="level4">一般</Option>
                                <Option value="level5">低</Option>
                                <Option value="level6">较低</Option>
                            </Select>
                        </span>
                    </div>
                </div>
                <div className={style.taskInformationDescription}>
                    <span>任务描述：<TextArea placeholder='非常重大的事件。' /></span>
                </div>
                <div className={style.taskInformationButtons}>
                    <button onClick={this.handleRelease}>
                        发布
                    </button>,
                    <button onClick={this.handleReset}>
                        重置
                    </button>,
                </div>
            </div>
        )
    }
}
export default TaskRelease;