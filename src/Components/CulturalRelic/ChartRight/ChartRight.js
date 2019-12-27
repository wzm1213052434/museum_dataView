import React, { PureComponent } from 'react';
import DisplayActivityCount from './DisplayActivityCount';
import ProductSalesRanking from './ProductSalesRanking';
import ProductsProfits from './ProductsProfits';

export default class CulturaRelicChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">展览活动统计</div>
                    <DisplayActivityCount></DisplayActivityCount>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">文创产品销售排行榜</div>
                    <ProductSalesRanking></ProductSalesRanking>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">文创产品收入统计</div>
                    <ProductsProfits></ProductsProfits>
                </div>
            </div>
            );
    }
}
