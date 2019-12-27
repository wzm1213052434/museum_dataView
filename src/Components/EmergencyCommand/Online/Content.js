import React, { PureComponent } from 'react';
import style from "./Content.module.css";
export default class OnlineContent extends PureComponent {
    render() {
        return (
            <div className={style.videoPane}>
                <div>现场连线视频</div>
                <div className={style.videoBlocks}>
                    <div className={style.videoBlock}>
                        <div className={style.videoBlockUp}></div>
                        <div className={style.videoBlockDown}>现场01</div>
                    </div>
                    <div className={style.videoBlock}>
                        <div className={style.videoBlockUp}></div>
                        <div className={style.videoBlockDown}>现场02</div>
                    </div>
                    <div className={style.videoBlock}>
                        <div className={style.videoBlockUp}></div>
                        <div className={style.videoBlockDown}>控制室01</div>
                    </div>
                    <div className={style.videoBlock}>
                        <div className={style.videoBlockUp}></div>
                        <div className={style.videoBlockDown}>安保人员01</div>
                    </div>
                </div>
            </div>
        );
    }
}
