import React, { Component } from 'react';
import { TOILET_CONST } from './Const.js';
import style from "../../VenueService.module.css";
import WifiIcon from './Image/Point.png';

export default class ToiletPoints extends Component {
        render() {
        return (
            <React.Fragment>
              { TOILET_CONST.POINT_LIST
                    .map(key => <div key={key.id}>
                                  <div style={ { left: key.position.x + '%', top: key.position.y + '%' } } className={ style.broadcastPoint }>
                                    <img src={ WifiIcon } className={ style.broadcastIcon } alt="广播气泡" />
                                  </div>
                                  <div style={ { left: key.position.x + 3 + '%', top: key.position.y - 1 + '%' } } className={ style.wifiInfo + ' ' + style.toiletInfo}>
                                    <p>空气指数：4</p>
                                    <p>温度：23℃</p>
                                    <p>湿度：47.55%</p>
                                    <p>氨气：8.36mg/m³</p>
                                    <p>硫化氢：3ppm</p>
                                    <p>甲醛：0.01mg/m³</p>
                                  </div>
                                </div>
                ) }
            </React.Fragment>
            );
    }
}
