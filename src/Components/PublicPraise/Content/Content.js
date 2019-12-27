import React, { PureComponent } from 'react';
import CommentFever from './CommentFever';
import CompositeIndex from './CompositeIndex';
import OtaComment from "./OtaComment";
import style from './Content.module.css';

export default class PublicPriseContent extends PureComponent {
    render() {
        return (
             <div className={style.contentAreas}>
                <div className={style.chartArea}>
                    <div className="chart-title">评论热度满意度趋势</div>
                    <CommentFever />
                </div>
                <div className={style.chartArea}>
                    <div className="chart-title">综合口碑指数</div>
                    <CompositeIndex />
                </div>
                <div className={style.chartArea}>
                    <div className="chart-title">OTA评论分布</div>
					<div style={{ width: "100%", height: "80%", marginTop: "2%" }}>
                        <OtaComment></OtaComment>
                    </div>
                </div>
            </div>
            );
    }
}
