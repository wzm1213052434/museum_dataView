import React, { PureComponent } from 'react';
import WifiPoints from './WifiPoints.js';

export default class VenueServiceWifiContent extends PureComponent {
    componentDidMount() {
        this.props.changeBg('out');
    }

    componentWillUnmount() {
        this.props.changeBg('in');
    }

    render() {
        return (
            <WifiPoints />
        );
    }
}
