import React, { PureComponent } from 'react';
import LiveBroadcast from './LiveBroadcast';
import BroadcastDevice from './BroadcastDevice';
import GroupLive from './GroupLive';
import style from '../../VenueService.module.css';
export default class ChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div className="chart-right-venue-whole">
                    <div className="chart-area-one-second">
                        <div className="chart-title">实时广播</div>
                        <LiveBroadcast></LiveBroadcast>
                    </div>
                    <div className="chart-area-one-second">
                        <div className="chart-title">设备分组</div>
                        <GroupLive></GroupLive>
                    </div>
                </div>
                <div className={style.chartRightDownVenue}>
                    <div style={{ color: 'white', textAlign: 'center' }}>广播设备列表</div>
                    <BroadcastDevice></BroadcastDevice>
                </div>
            </div>
        );
    }
}
