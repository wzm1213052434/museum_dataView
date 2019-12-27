import React, { PureComponent } from 'react';
import RecentSevenDayTourist from "./RecentSevenDayTourist";
import VisitorFlowRate from "./VisitorFlowRate";
import CommentList from './CommentList';

export default class VenueServiceSmartToiletChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">人流量分布</div>
                    <VisitorFlowRate></VisitorFlowRate>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">近7日人流量统计</div>
                    <RecentSevenDayTourist></RecentSevenDayTourist>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">评论列表</div>
                    <CommentList></CommentList>
                </div>
            </div>
        );
    }
}