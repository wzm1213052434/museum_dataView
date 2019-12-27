import React, { PureComponent } from 'react';
import CollectionStatistics from './CollectionStatistics';
import DisabilityStatistics from './DisabilityStatistics';
import CulturalRelicLevel from './CulturalRelicLevel';

export default class CulturalRelicChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">藏品数量统计</div>
                    <CollectionStatistics></CollectionStatistics>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">文物级别构成</div>
                    <CulturalRelicLevel></CulturalRelicLevel>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">完残程度统计</div>
                    <DisabilityStatistics></DisabilityStatistics>
                </div>
            </div>
        );
    }
}
