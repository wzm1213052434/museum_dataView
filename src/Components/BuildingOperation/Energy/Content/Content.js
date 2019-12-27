import React, { PureComponent } from 'react';
import style from "./Content.module.css";
import FloorMenu from '../../../Common/FloorMenu/FloorMenu';

export default class BuildingContent extends PureComponent {
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


    render() {
        return (
            <div className="content">
              <div>
                <div className={ this.state.picShow ? style.innerRoom : style.anotherInnerRoom }>
                </div>
              </div>
              <FloorMenu childTransMes={ msg => this.childTransMes(msg) }></FloorMenu>
            </div>
        );
    }
}
