import React, { PureComponent } from 'react';
import style from "../../VenueService.module.css";
import BroadcastIcon from './Image/broadcastPoint.png';
import { BROADCAST_CONST } from './Const.js';

export default class BroadcastPoints extends PureComponent {
    render() {
        return (
            <React.Fragment>
              { BROADCAST_CONST.POINT_LIST
                    .map(key => <div key={key.id}>
                                  <div style={ { left: key.position.x + '%', top: key.position.y + '%' } } className={ style.broadcastPoint }>
                                    <img src={ BroadcastIcon } className={ style.broadcastIcon } alt="广播气泡" />
                                  </div>
                                  <div style={ { left: key.position.x + 3 + '%', top: key.position.y - 1 + '%' } } className={ style.broadcastInfoOn }>
                                    <p>(展厅01)</p>
                                    <p>特殊展厅走进历史01号录播</p>
                                    <p>珍宝展厅10号录播</p>
                                  </div>
                                </div>
                ) }
            </React.Fragment>
            );
    }
}
