import React, { PureComponent } from 'react';
import style from "../../VenueService.module.css";
import BroadcastIcon from './Image/WifiPoint.png';
import { WIFI_CONST } from './Const.js';

export default class WifiPoints extends PureComponent {
    render() {
        return (
            <React.Fragment>
              { WIFI_CONST.POINT_LIST
                    .map(key => <div key={key.id}>
                                  <div style={ { left: key.position.x + '%', top: key.position.y + '%' } } className={ style.broadcastPoint }>
                                    <img src={ BroadcastIcon } className={ style.broadcastIcon } alt="广播气泡" />
                                  </div>
                                  <div style={ { left: key.position.x + 3 + '%', top: key.position.y - 1 + '%' } } className={ style.wifiInfo }>
                                    <p>AP-01</p>
                                    <p>油画展厅点位2</p>
                                    <p>当前连接数：55</p>
                                  </div>
                                </div>
                ) }
            </React.Fragment>
            );
    }
}
