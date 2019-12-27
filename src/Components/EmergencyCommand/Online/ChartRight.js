import React, { PureComponent } from 'react';
import style from './Online.module.css';
import TaskRelease from "./TaskRelease";
import TaskExecution from "./TaskExecution";
import ProcessingCase from "./ProcessingCase";

export default class OnlineChartRight extends PureComponent {
    render() {
        return (
            <div className={style.content}>
                <div className="chart-area-one-third">
                    <div className="chart-title">任务发布</div>
                    <TaskRelease></TaskRelease>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">任务执行情况列表</div>
                    <TaskExecution></TaskExecution>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">结案处理</div>
                    <ProcessingCase></ProcessingCase>
                </div>
            </div>
        );
    }
}
