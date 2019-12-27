import React, { PureComponent } from 'react';
import Line from './Image/TitleLine.png';
import Back from './Image/back.png';
import Fresh from './Image/fresh.png';
import style from './Online.module.css';

export default class OnlineTitle extends PureComponent {
    clickBack = () => {
    	this.props.history.goBack();
    }

    clickFresh = () => {
    	window.location.reload();
    }
  
    render() {
        return (
            <div className={ style.title }>
              <div className={ style.titleIcons }>
                <img src={ Back } alt="返回" className={ style.titleIcon} onClick={this.clickBack}/>
                <img src={ Fresh } alt="刷新" className={ style.titleIcon} onClick={this.clickFresh} />
              </div>
              <div className={ style.titleText }>
                <span>应急指挥</span>
                <span>--XXX事件</span>
              </div>
              <img src={ Line } alt="标题线" className={ style.titleLine } />
            </div>
            );
    }
}
