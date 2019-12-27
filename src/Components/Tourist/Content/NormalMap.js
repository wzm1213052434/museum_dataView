import React, { Component } from 'react';
import { TOURIST_CONST } from './Const.js';
import style from "./NormalMap.module.css";
import Point from './Image/Point.png';
import HallDetail from './HallDetail';

export default class NormalMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
             pointTags: TOURIST_CONST.POINT_TAG
        };
    }

    handleClick = (key) => {
        this.state.pointTags.map(point => {
            if (point.text === key.text) {
                point.show = !point.show
            }
            return point;
        })
        this.setState({});
    }

    render() {
        return (
            <div className={ style.pointContainer }>
              { this.state.pointTags.map(
                    key => <div key={ key.text }>
                             <img id={ key } src={ Point } style={ { left: key.x + '%', top: key.y + '%' } } className={ style.pointTagImg } alt="点位导航气泡" onClick={ this.handleClick.bind(this, key) } />
                             { key.show && <HallDetail x={ key.x } y={ key.y } /> }
                           </div>) }
            </div>
            );
    }
}
