import React, { PureComponent } from 'react';
import style from './DetailInfo.module.css';

export default class DetailInfo extends PureComponent {
    close=() => {
        this.props.closeDetail();
    }
    render() {
        return (
            <div className={ style.DetailWhole }>
              <div className={ style.title }>
                <span style={ { verticalAlign: 'middle' } }>未处理事件02</span>
                <span className={ style.close + " icon-close" } onClick={this.close}></span>
              </div>
              <div className={ style.content }>
                <p>上报事件：2019-09-18</p>
                <p>事件类型：公共卫生事件</p>
                <p>事件等级：特别重大</p>
                <p>事件位置：2-1油画厅</p>
                <p>事件描述：事件未处理</p>
                <p>事件状态：接处警</p>
                <p>上报人：徐凯</p>
                <p>处理人：李现</p>
              </div>
            </div>
            );
    }
}
