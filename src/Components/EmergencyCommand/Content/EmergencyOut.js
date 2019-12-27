import React, { PureComponent } from 'react';
import style from "./Content.module.css";
import EmergencyIcon from './Image/emergencyIcon.png';
import Video from './Image/video.mp4';
import { Modal } from 'antd';


export default class EmergencyOut extends PureComponent {
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

    handleClickPop = () => {
      this.props.setFloor(true);
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <React.Fragment>
              <div className={ style.pointContainer }>
                <div style={ { left: "40%", top: "31%" } } className={ style.emergencyPoint }>
                  <div className={ style.emergencyVideo } onClick={this.handleClickVideo}>
                    <span>  2-1未处理事件01  </span>
                    <span className="icon-video"> </span>
                  </div>
                  <img src={ EmergencyIcon } className={ style.emergencyIcon } alt="报警气泡" onClick={this.handleClickPop} />
                </div>
                <div style={ { left: "50%", top: "17%" } } className={ style.emergencyPoint }>
                  <div className={ style.emergencyVideo } onClick={this.handleClickVideo}>
                    <span>  2-2未处理事件02  </span>
                    <span className="icon-video"> </span>
                  </div>
                  <img src={ EmergencyIcon } className={ style.emergencyIcon } alt="报警气泡" onClick={this.handleClickPop} />
                </div>
                 <div style={ { left: "60%", top: "35%" } } className={ style.emergencyPoint }>
                  <div className={ style.emergencyVideo } onClick={this.handleClickVideo}>
                    <span>  1-2未处理事件03  </span>
                    <span className="icon-video"> </span>
                  </div>
                  <img src={ EmergencyIcon } className={ style.emergencyIcon } alt="报警气泡" onClick={this.handleClickPop}  />
                </div>
                 <div style={ { left: "50%", top: "60%" } } className={ style.emergencyPoint }>
                  <div className={ style.emergencyVideo } onClick={this.handleClickVideo}>
                    <span>  3-2未处理事件04  </span>
                    <span className="icon-video"> </span>
                  </div>
                  <img src={ EmergencyIcon } className={ style.emergencyIcon } alt="报警气泡" onClick={this.handleClickPop}  />
                </div>
                 <div style={ { left: "20%", top: "17%" } } className={ style.emergencyPoint }>
                  <div className={ style.emergencyVideo } onClick={this.handleClickVideo}>
                    <span>  2-5未处理事件05  </span>
                    <span className="icon-video"> </span>
                  </div>
                  <img src={ EmergencyIcon } className={ style.emergencyIcon } alt="报警气泡" onClick={this.handleClickPop}  />
                </div>
              </div>
              <Modal bodyStyle={ { backgroundColor: "#000" } } title="珍宝馆故障报警" centered footer={ null } width="1200px" visible={ this.state.visible } onCancel={ this.handleCancel }>
                <video style={ { height: "100%", width: "100%", objectFit: "fill" } } src={ Video } autoPlay loop>
                  your browser does not support the video tag
                </video>
              </Modal>
            </React.Fragment>
            );
    }
}
