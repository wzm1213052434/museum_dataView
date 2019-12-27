import React, { PureComponent } from 'react';
import RightTable from './RightTable';
import StayTime from './StayTime';
import TicketKind from './TicketKind';
import CheckTicket from './CheckTicket';

export default class TouristChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="chart-right-whole">
                <div className="chart-area">
                    <div className="chart-title">热门客源地分析</div>
                    <RightTable></RightTable>
                </div>
                <div className="chart-area">
                    <div className="chart-title">观众逗留时长分析</div>
                    <StayTime></StayTime>
                </div>
                <div className="chart-area">
                    <div className="chart-title">票种分析</div>
                    <TicketKind></TicketKind>
                </div>
                <div className="chart-area">
                    <div className="chart-title">检票时间分析</div>
                    <CheckTicket></CheckTicket>
                </div>
            </div>
        );
    }
}