import React, { PureComponent } from 'react';
import WholeComment from "./WholeComment";
import GoodComment from "./GoodComment";
import BadComment from "./BadComment";

export default class PublicPraiseChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">总评论/满意度趋势</div>
                    <WholeComment></WholeComment>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">好评量/好评率趋势</div>
                    <GoodComment></GoodComment>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">差评量/差评率趋势</div>
                    <BadComment></BadComment>
                </div>
            </div>
            );
    }
}
