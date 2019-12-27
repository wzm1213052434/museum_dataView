import React, { PureComponent } from 'react';
import FilePlayback from './FilePlayback';
import TextBroadcast from './TextBroadcast';

export default class ChartUpLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="chart-left-venue-whole">
                <div className="chart-area-one-second">
                    <div className="chart-title">文件播放</div>
                    <FilePlayback></FilePlayback>
                </div>
                <div className="chart-area-one-second">
                    <div className="chart-title">文本广播</div>
                    <TextBroadcast></TextBroadcast>
                </div>
            </div>
        );
    }
}
