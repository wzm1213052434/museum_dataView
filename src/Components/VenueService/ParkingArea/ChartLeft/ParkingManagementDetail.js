import React, { PureComponent } from 'react';
import style from './Parking.module.css';

export default class ParkingManagementDetail extends PureComponent {
    closeDetail=() => {
        this.props.closeDetailDetail();
    }
    render() {
        return (
            <div className={ style.ParkingManagementDetailWhole }>
              <div className={ style.detailTitle }>
                <span style={ { verticalAlign: 'middle' } }>停车场车位详情</span>
                <span className={ style.closeDetail + " icon-close" } onClick={this.closeDetail}></span>
              </div>
              <div className={ style.contentDetail }>
                <p>停车场名称：{this.props.parkingInfo.parkingName}</p>
                <p>车位总数：{this.props.parkingInfo.parkingSpaceTotal}</p>
                <p>空余车位：{this.props.parkingInfo.parkingSpaceFree}</p>
                <p>预约车位：{this.props.parkingInfo.parkingSpaceReservation}</p>
                <p>预约车位时间：2019-10-25 11:00</p>
              </div>
            </div>
            );
    }
}
