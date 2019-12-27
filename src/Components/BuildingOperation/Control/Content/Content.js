import React, { PureComponent } from 'react';
import style from "./Content.module.css";
import FloorMenu from '../../../Common/FloorMenu/FloorMenu';
import { BUILD_CONST } from './Const.js';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

export default class BuildingContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            picShow: true,
            lastShowPic: -1,
            activeButton: this.getActiveButton()
        };
    }

    getActiveButton = () => {
        let path = this.props.history.location.pathname;
        if(path.indexOf("fresh") > 0){
            return "fresh";
        }
        else if(path.indexOf("other") > 0){
            return "other";
        }
        else{
            return "air";
        }
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

    getButtonStyle = (button) => {
        return this.state.activeButton === button ? BUILD_CONST.ButtonActiveStyle : BUILD_CONST.ButtonDefaultStyle
    }

    switchButtonClick = (event) => {
        console.log(event.target.name);
        this.props.history.push('/building-operation/buildingControl/'+event.target.name);
        this.setState({
            activeButton: event.target.name
        })
    }

    render() {
        return (
            <div className="content">
              <div>
                <div className={ this.state.picShow ? style.innerRoom : style.anotherInnerRoom }>
                </div>
              </div>
            <ButtonGroup className="control-buttons">
                        <Button name='air' style={ this.getButtonStyle('air') } size="small" onClick={ this.switchButtonClick }>空调</Button>
                        <Button name='fresh' style={ this.getButtonStyle('fresh') } size="small" onClick={ this.switchButtonClick }>新风机</Button>
                        <Button name='other' style={ this.getButtonStyle('other') } size="small" onClick={ this.switchButtonClick }>其他</Button>
                      </ButtonGroup>
              <FloorMenu childTransMes={ msg => this.childTransMes(msg) }></FloorMenu>
            </div>
            );
    }
}
