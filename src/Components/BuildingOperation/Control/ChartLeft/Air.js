import React, { PureComponent } from 'react';
import SelfControlAirCondition from "./SelfControlAirCondition";
import style from "../../BuildingOperation.module.css";

export default class AirChartLeft extends PureComponent {
    render() {
        return (<div className={ style.chartAreaNoTitle }>
                  <SelfControlAirCondition></SelfControlAirCondition>
                </div>);
    }
}
