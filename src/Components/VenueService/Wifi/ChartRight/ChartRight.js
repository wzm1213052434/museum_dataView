import React, { PureComponent } from 'react';
import ApList from './ApList'
import ValidateMethod from "./ValidateMethod";
import HotRouteLine from "./HotRouteLine";
export default class VenueServiceWifiChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">AP点列表</div>
                    <ApList></ApList>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">认证方式占比</div>
                    <ValidateMethod></ValidateMethod>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">热门路线分析</div>
                    <HotRouteLine></HotRouteLine>
                </div>
            </div>
        );
    }
}
