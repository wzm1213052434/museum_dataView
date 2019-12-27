import React, { PureComponent } from 'react';
import RealtimeAudience from "./RealtimeAudience";
import AudienceTotal from "./AudienceTotal";
import AudienceDistributed from "./AudienceDistributed";
import AudienceGender from "./AudienceGender";

export default class HomeChartLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="chart-left-whole" >
                <div className="chart-area" >
                    <div className="chart-title">实时观众数量</div>
                    <RealtimeAudience></RealtimeAudience>
                </div>
                <div className="chart-area" >
                    <div className="chart-title">观众数量统计</div>
                    <AudienceTotal></AudienceTotal>
                </div>
                <div className="chart-area">
                    <div className="chart-title">观众数量趋势分布</div>
                    <AudienceDistributed></AudienceDistributed>
                </div>
                <div className="chart-area">
                    <div className="chart-title">观众性别年龄段统计</div>
                    <AudienceGender></AudienceGender>
                </div>
            </div>
        );
    }
}
