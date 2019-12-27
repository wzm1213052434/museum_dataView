import React, { PureComponent } from 'react';
import { Icon, Carousel } from 'antd';
import quNa from "./Image/quNa.png";
import meiTuan from "./Image/meiTuan.png";
import xieCheng from "./Image/xieCheng.png";
import jingDong from "./Image/jingDong.png";
import maFeng from "./Image/maFeng.png";
import tongCheng from "./Image/tongCheng.png";
import tuNiu from "./Image/tuNiu.png";
import style from "./OtaComment.module.css";

export default class OtaComment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pics: [quNa, meiTuan, xieCheng, maFeng, tongCheng, jingDong, tuNiu],
            hot: [387014, 283809, 214887, 256545, 58561, 21206, 20731],
            meet: [4.8, 4.7, 4.3, 4.5, 4.6, 4.8, 4.9],
            pageNow: 1
        };
        this.goToIndex = null;
        this.onClickButton = this.onClickButton.bind(this);
    }
    onClickButton() {
        if (this.state.pageNow === 1) {
            this.goToIndex.goTo(2);
            this.setState({
                pageNow: 2
            })
        } else {
            this.goToIndex.goTo(1);
            this.setState({
                pageNow: 1
            })
        }
    }
    render() {
        const tableInit = (which) => {
            // eslint-disable-next-line default-case
            switch (which) {
                case "pics": {
                    return this.state.pics.map((item, index) =>
                        <td key={index * 5}>
                            <img src={item} style={{ width: "85%", height: "50%", margin: "5% auto" }} alt="这是一张图片" />
                        </td>
                    )
                }
                // eslint-disable-next-line no-fallthrough
                case "hot": {
                    return this.state.hot.map((item, index) =>
                        <td key={index * 5} className={style.tableCell}>
                            口碑热度
                            <br />
                            <span className={style.cellSpanHot}>————</span>
                            <br />
                            {item}
                        </td>
                    )
                }
                case "meet": {
                    return this.state.meet.map((item, index) =>
                        <td key={index * 5} className={style.tableCell}>
                            满意度
                            <br />
                            <span className={style.cellSpanHot}>————</span>
                            <br />
                            {item}
                        </td>
                    )
                }
            }
        }
        return (
            <div className={style.wholeOtaComment}>
                <div className={style.OtaCarousel}>
                    <Carousel dots={false} ref={el => { this.goToIndex = el; }}>
                        <div>
                            <table style={{ width: "95%", height: "90%", margin: "1% auto", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr className={style.OtaTableRow}>
                                        {tableInit("pics")}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={style.OtaTableRow}>
                                        {tableInit("hot")}
                                    </tr>
                                    <tr className={style.OtaTableRow}>
                                        {tableInit("meet")}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table style={{ width: "95%", height: "100%", margin: "0 auto" }}>
                                <thead>
                                    <tr className={style.OtaTableRow}>
                                        {tableInit("pics")}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={style.OtaTableRow}>
                                        {tableInit("hot")}
                                    </tr>
                                    <tr className={style.OtaTableRow}>
                                        {tableInit("meet")}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Carousel>
                </div>
                <div className={style.OtaIcons}>
                    <Icon type="caret-left" className={style.OtaIcon} onClick={this.onClickButton} />
                    <Icon type="caret-right" className={style.OtaIcon} onClick={this.onClickButton} />
                </div>
            </div>
        )
    }
}
