import React, { PureComponent } from 'react';
import style from "./Content.module.css";
import FloorMenu from '../../Common/FloorMenu/FloorMenu';
import EmergencyInnerRoom from './EmergencyInnerRoom';
import EmergencyOut from './EmergencyOut';

export default class EmergencyCommandContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            picShow: true,
            lastShowPic: -1,
            floorShow: false
        };
    }

    componentDidMount() {
        (!this.props.showFloor) && this.props.changeBg('out');
    }

    componentWillUnmount() {
        this.props.changeBg('in');
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

    setFloor = (isShow) => {
        if (isShow) {
            this.setState({
                floorShow: true
            });
            this.props.changeBg('in');
        } else {
            this.setState({
                floorShow: false
            });
            this.props.changeBg('out');
        }
    }

    getContent = () => {
        if (this.props.showFloor) {
            return (<React.Fragment>
                      <div>
                        { this.state.picShow ? <EmergencyInnerRoom setFloor={ this.setFloor } /> :
                          <div className={ style.anotherInnerRoom }></div> }
                      </div>
                      <FloorMenu childTransMes={ msg => this.childTransMes(msg) }></FloorMenu>
                    </React.Fragment>)
        } else if (this.state.floorShow) {
            return (<React.Fragment>
                      <div>
                        { this.state.picShow ? <EmergencyInnerRoom setFloor={ this.setFloor } /> :
                          <div className={ style.anotherInnerRoom }></div> }
                      </div>
                      <FloorMenu childTransMes={ msg => this.childTransMes(msg) }></FloorMenu>
                    </React.Fragment>)
        } else {
            return <EmergencyOut setFloor={ this.setFloor } />
        }
    }

    render() {
        return (
            <div className="content">
              { this.getContent() }
            </div>
            );
    }
}
