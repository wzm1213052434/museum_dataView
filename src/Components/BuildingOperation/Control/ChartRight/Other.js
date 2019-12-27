import React, { PureComponent } from 'react';
import styleOthers from "./Other.module.css";
import FireWetFeelTotals from "./FireWetFeelTotals";
import OpenQuantityLighting from "./OpenQuantityLighting";
import MalfunctionQuantityLighting from "./MalfunctionQuantityLighting";
import OpenQuantityElevator from "./OpenQuantityElevator";
import MalfunctionQuantityEscalator from "./MalfunctionQuantityEscalator";

export default class OtherChartRight extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="chart-area-one-third">
          <div className="chart-title">消防系统</div>
          <div className={styleOthers.fireSystemBlocks}>
            <div className={styleOthers.fireSystemImagesBlocks}>
              <div className={styleOthers.fireSystemImage}></div>
              <div className={styleOthers.fireSystemBlock}>
                <span className={styleOthers.fireSystemTitle}>消防总机数</span>
                <span className={styleOthers.fireSystemValue}>2910</span>
              </div>
            </div>
            <div className={styleOthers.fireSystemTotalBlocks}>
              <div className={styleOthers.fireSystemTotals}>
                <span>消防湿感总数</span>
                <FireWetFeelTotals></FireWetFeelTotals>
              </div>
              <div className={styleOthers.fireSystemTotals}>
                <span>消防烟感总数</span>
                <FireWetFeelTotals></FireWetFeelTotals>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-area-one-third">
          <div className="chart-title">公众照明</div>
          <div className={styleOthers.fireSystemBlocks}>
            <div className={styleOthers.fireSystemImagesBlocks}>
              <div className={styleOthers.publicLightingImage}></div>
              <div className={styleOthers.fireSystemBlock}>
                <span className={styleOthers.fireSystemTitle}>照明总数</span>
                <span className={styleOthers.fireSystemValue}>3389</span>
              </div>
            </div>
            <div className={styleOthers.fireSystemTotalBlocks}>
              <div className={styleOthers.fireSystemTotals}>
                <span>开启数量</span>
                <OpenQuantityLighting></OpenQuantityLighting>
              </div>
              <div className={styleOthers.fireSystemTotals}>
                <span>故障数量</span>
                <MalfunctionQuantityLighting></MalfunctionQuantityLighting>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-area-one-third">
          <div className="chart-title">电梯扶梯</div>
          <div className={styleOthers.fireSystemBlocks}>
            <div className={styleOthers.fireSystemImagesBlocks}>
              <div className={styleOthers.elevatorImage}></div>
              <div className={styleOthers.elevatorTotalsBlock}>
                <div className={styleOthers.elevatorBlock}>
                  <span className={styleOthers.fireSystemTitle}>直梯总数</span>
                  <span className={styleOthers.fireSystemValue}>156</span>
                </div>
                <div className={styleOthers.elevatorBlock}>
                  <span className={styleOthers.fireSystemTitle}>扶梯总数</span>
                  <span className={styleOthers.fireSystemValue}>310</span>
                </div>
              </div>
            </div>
            <div className={styleOthers.fireSystemTotalBlocks}>
              <div className={styleOthers.fireSystemTotals}>
                <span>开启数量</span>
                <OpenQuantityElevator></OpenQuantityElevator>
              </div>
              <div className={styleOthers.fireSystemTotals}>
                <span>故障数量</span>
                <MalfunctionQuantityEscalator></MalfunctionQuantityEscalator>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>);
  }
}
