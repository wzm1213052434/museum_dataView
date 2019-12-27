import React from "react";
import style from "./TaskRelease.module.css";
import { Input } from 'antd';

const { TextArea } = Input;

class ProcessingCase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // 保存
    handleOk = () => {
        console.log("handleOk");
    };
    // 结束
    handleClose = () => {
        console.log("handleClose");
    };

    render() {
        return (
            <div className={style.taskReleaseModule}>
                <div className={style.processingCaseInfo}>
                    <span>处理结果：</span>
                </div>
                <div className={style.processingCaseResult}>
                    <TextArea placeholder='经处理，决定结案。' />
                </div>
                <div className={style.taskInformationButtons}>
                    <button onClick={this.handleOk}>
                        保存
                    </button>,
                    <button onClick={this.handleClose}>
                        结束
                    </button>,
                </div>
            </div>
        )
    }
}
export default ProcessingCase;