import React, { Component } from 'react';
import style from "./Content.module.css";
import FloorMenu from '../../Common/FloorMenu/FloorMenu';
import NormalMap from './NormalMap';
import { TOURIST_CONST } from './Const.js';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

export default class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pointTags: TOURIST_CONST.POINT_TAG,
            picShow: true,
            lastShowPic: -1,
            activeButton: 'common'
        };
    }

    childTransMes(str) {
        if (str !== this.state.lastShowPic) {
            this.setState({
                picShow: !this.state.picShow,
                lastShowPic: str
            })
        }
        console.log(this.state);
    }

    switchButtonClick = (event) => {
        console.log(event.target.name);
        this.setState({
            activeButton: event.target.name
        })
    }

    getInnerRoomStyle = (picShow, button) => {
        if (button === "heatmap") {
            return style.hotMapRoom;
        } else if (picShow) {
            return style.innerRoom;
        } else {

        }
        return style.anotherInnerRoom;
    }

    getButtonStyle = (button) => {
        return this.state.activeButton === button ? TOURIST_CONST.ButtonActiveStyle : TOURIST_CONST.ButtonDefaultStyle
    }

    render() {
        const innerRoomStyle = this.getInnerRoomStyle(this.state.picShow, this.state.activeButton);

        return (

            <div className="content">
              <ButtonGroup className={ style.buttons }>
                <Button name='common' style={ this.getButtonStyle('common') } size="small" onClick={ this.switchButtonClick }>常规图</Button>
                <Button name='heatmap' style={ this.getButtonStyle('heatmap') } size="small" onClick={ this.switchButtonClick }>热力图</Button>
              </ButtonGroup>
              <div>
                <div className={ innerRoomStyle }>
                  { this.state.activeButton === "common"
                    && <NormalMap /> }
                </div>
              </div>
              <FloorMenu childTransMes={ msg => this.childTransMes(msg) }></FloorMenu>
            </div>
            );
    }
}
