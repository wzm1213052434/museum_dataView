import React, { PureComponent } from 'react';
import InviteOnline from './InviteOnline';
import CommandGroupMenber from './CommandGroupMenber';
import ExpertsManagement from './ExpertsManagement';
import style from './Online.module.css';

export default class OnlineChartLeft extends PureComponent {
    render() {
        return (
            <div className={style.content}>
                <div className="chart-area-one-third">
                    <div className="chart-title">在线邀请</div>
                    <InviteOnline></InviteOnline>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">指挥小组成员</div>
                    <CommandGroupMenber></CommandGroupMenber>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">专家管理</div>
                    <ExpertsManagement></ExpertsManagement>
                </div>
            </div>
        );
    }
}
