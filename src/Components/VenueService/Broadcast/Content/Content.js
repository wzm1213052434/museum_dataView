import React, { PureComponent } from 'react';
import BroadcastPoints from './BroadcastPoints.js';
import style from '../../VenueService.module.css';

export default class Content extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.changeBg('venue');
    }

    componentWillUnmount() {
        this.props.changeBg('in');
    }
    render() {
        return (
            <div className={style.contentVenueAreas}>
                <div className={style.chartVenueAreaUp}>
                <BroadcastPoints />
                </div>
                <div className={style.chartVenueAreaDown}>
                </div>
            </div>
        );
    }
}
