import React, { PureComponent } from 'react';
import style from "./Content.module.css";
import EmergencyIcon from './Image/emergencyIcon.png';
import BackIcon from './Image/backOut.png';
import Video from './Image/video.mp4';
import { Modal } from 'antd';


export default class EmergencyInnerRoom extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }


    handleClickVideo = () => {
        this.setState({
            visible: true,
        });
    }

    handleClickBack =() => {
      this.props.setFloor(false);
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className={ style.innerRoom }>
              <div className={ style.pointContainer }>
                <div style={ { left: "40%", top: "31%" } } className={ style.emergencyPoint }>
                  <div className={ style.emergencyVideo } onClick={this.handleClickVideo}>
                    <span>  2-1未处理事件01  </span>
                    <span className="icon-video"> </span>
                  </div>
                  <img src={ EmergencyIcon } className={ style.emergencyIcon } alt="报警气泡" />
                </div>
                <div style={ { right: 0, bottom: 0, width:'5%'} } className={ style.emergencyPoint }>
                  <img src={ BackIcon }  title="返回全景图" className={ style.backIcon } onClick={this.handleClickBack} alt="报警气泡" />
                </div>
              </div>
              <Modal bodyStyle={ { backgroundColor: "#000" } } title="珍宝馆故障报警" centered footer={ null } width="1200px" visible={ this.state.visible } onCancel={ this.handleCancel }>
                <video style={ { height: "100%", width: "100%", objectFit: "fill" } } src={ Video } autoPlay loop>
                  your browser does not support the video tag
                </video>
              </Modal>
            </div>
            );
    }
}
