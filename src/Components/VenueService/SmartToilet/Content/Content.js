import React, { PureComponent } from 'react';
import style from "./Content.module.css";
import FloorMenu from '../../../Common/FloorMenu/FloorMenu';
import ToiletPoints from './ToiletPoints.js';

export default class VenueServiceSmartToiletContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            picShow: true,
            lastShowPic: -1
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

    getInnerRoomStyle = (picShow) => {
        if (picShow) {
            return style.innerRoom;
        } else {
            return style.anotherInnerRoom;
        }  
    }

    render() {
    	const innerRoomStyle = this.getInnerRoomStyle(this.state.picShow);
        return (
            <div className="content">
              <div>
                <div className={ innerRoomStyle }>
                  { this.state.picShow && <ToiletPoints />}
                </div>
              </div>
              <FloorMenu childTransMes={ msg => this.childTransMes(msg) }></FloorMenu>
            </div>
        );
    }
}