import React, { PureComponent } from 'react';
import CommentHeat from './CommentHeat';
import SceneCommentSituation from './SceneCommentSituation';
import CommentHotWords from './CommentHotWords';

export default class PublicPraiseChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">评论热度分布</div>
					<CommentHeat></CommentHeat>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">景区评论概况</div>
					<div style={{ width: "100%", height: "100%" }}>
					                <SceneCommentSituation></SceneCommentSituation>
					                </div>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">评论热词</div>
					<CommentHotWords></CommentHotWords>
                </div>
            </div>
        );
    }
}
