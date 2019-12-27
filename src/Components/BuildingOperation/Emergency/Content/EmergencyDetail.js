import React, { PureComponent } from 'react';
import style from "./Content.module.css";
import EmergencyIcon from './Image/emergencyIcon.png';
import VideoIcon from './Image/VideoIcon.png';
import Video from './Image/video.mp4';
import { Modal } from 'antd';


export default class EmergencyDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }


    handleClick = () => {
        this.setState({
            visible: true,
        });
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
                <img src={ EmergencyIcon } style={ { left: '40%', top: '31%' } } className={ style.emergencyIcon } alt="报警气泡" />
                <p style={ { left: '43%', top: '32.7%' } } className={ style.pointTagText }>
                  珍宝馆警报
                </p>
                <img src={ EmergencyIcon } style={ { left: '85%', top: '17%' } } className={ style.emergencyIcon } alt="报警气泡" />
                <p style={ { left: '88%', top: '18.7%' } } className={ style.pointTagText }>
                  油画馆警报
                </p>
                <div onClick={ this.handleClick }>
                  <img src={ VideoIcon } style={ { left: '32%', top: '36%' } } className={ style.videoIcon } alt="摄像头图标" />
                  <p style={ { left: '34%', top: '36.6%' } } className={ style.pointTagText }>
                    01-4摄像头
                  </p>
                </div>
                <div onClick={ this.handleClick }>
                  <img src={ VideoIcon } style={ { left: '46%', top: '50%' } } className={ style.videoIcon } alt="摄像头图标" />
                  <p style={ { left: '48%', top: '50.6%' } } className={ style.pointTagText }>
                    01-3摄像头
                  </p>
                </div>
                <div onClick={ this.handleClick }>
                  <img src={ VideoIcon } style={ { left: '78%', top: '35%' } } className={ style.videoIcon } alt="摄像头图标" />
                  <p style={ { left: '80%', top: '35.6%' } } className={ style.pointTagText }>
                    02-2摄像头
                  </p>
                </div>
              </div>
              <Modal bodyStyle={{backgroundColor:"#000"}} title="珍宝馆故障报警" centered footer={null} width="1200px" visible={ this.state.visible } onCancel={ this.handleCancel }>
                <video style={{height:"100%",width:"100%",objectFit:"fill"}} src={Video} autoPlay loop>
                  your browser does not support the video tag
                </video>
              </Modal>
            </div>
            );
    }
}
