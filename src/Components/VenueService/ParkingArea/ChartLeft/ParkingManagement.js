import React from 'react';
import style from './Parking.module.css';
import parkingSpaceData from './parkingSpace.json';
import lookOver from '../Image/eyeIcon.png';
import ParkingManagementDetail from './ParkingManagementDetail';

class ParkingManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,
            clickRow: '',
            modalDetail:''
        };
    }
    // 鼠标选择行之后改变颜色
    changeStateRow = (e) => {
        let rowNode = this.state.clickRow;
        if (rowNode !== "") {
            rowNode.style.background = "rgba(0,0,0,0)";
        }
        e.target.parentNode.style.background = "rgb(0, 110, 227)";
        this.setState({
            clickRow: e.target.parentNode
        })
    }
    // 停车场列表内容
    parkingTableContent = () => {
        return parkingSpaceData.map((item, index) => {
            return (
                <tr className={style.parkingTableTr} key={index}>
                    <td className={style.parkingTableTd} onClick={this.changeStateRow}>{item.parkingName}</td>
                    <td className={style.parkingTableTd} onClick={this.changeStateRow}>{item.parkingSpaceTotal}</td>
                    <td className={style.parkingTableTd} onClick={this.changeStateRow}>{item.parkingSpaceFree}</td>
                    <td className={style.parkingTableTd} onClick={this.changeStateRow}>{item.parkingSpaceReservation}</td>
                    <td className={style.parkingTableTd}><img src={lookOver} alt="查看" style={{ width: "1.5em", height: "0.94em" }} onClick={() => this.clickLookOver(item.parkingName, item.parkingSpaceTotal, item.parkingSpaceFree, item.parkingSpaceReservation)} /></td>
                </tr>
            )
        })
    }

    clickLookOver = (a,b,c,d) => {
        let obj={
            parkingName: a,
            parkingSpaceTotal: b,
            parkingSpaceFree: c,
            parkingSpaceReservation: d
        };

        this.setState({ 
            showDetail: true,
            modalDetail: obj
        });
    }

    closeDetailDetail = () => {
        this.setState({ 
            showDetail: false
        });
    }

    render() {
        return (
            <div className={style.parkingManagementTable}>
                <div className={style.parkingTablePane}>
                    <table className={style.parkingTableContent}>
                        <thead>
                            <tr className={style.parkingTableThs}>
                                <th className={style.parkingTableTh}>停车场名称</th>
                                <th className={style.parkingTableTh}>车位总数</th>
                                <th className={style.parkingTableTh}>空余车位</th>
                                <th className={style.parkingTableTh}>预约车位</th>
                                <th className={style.parkingTableTh}>查看</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.parkingTableContent()}
                        </tbody>
                    </table>
                </div>
                {this.state.showDetail && <ParkingManagementDetail closeDetailDetail={this.closeDetailDetail} parkingInfo={this.state.modalDetail} />}
            </div>
        );
    }
}

export default ParkingManagement;
