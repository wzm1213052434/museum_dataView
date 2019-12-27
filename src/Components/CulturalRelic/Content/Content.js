import React, { PureComponent } from 'react';
import CollectionList from "./CollectionList";
import HistoryShow from "./HistoryShow";
import style from './Content.module.css';

export default class CulturalRelicContent extends PureComponent {
    render() {
        return (
            <div className={style.contentAreas}>
                <div className={style.chartArea}>
                    <div className="chart-title">藏品列表</div>
                    <CollectionList></CollectionList>
                </div>
                <div className={style.chartArea}>
                    <div className="chart-title">历史展览活动</div>
                    <HistoryShow></HistoryShow>
                </div>
            </div>
        );
    }
}
