import React from "react";
import CarFrom from "./CarFrom";
import "./CountryMap.css";
class CountryMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="map">
                <div className="mapTitle">车辆来源地分布</div>
                <div className="carFromChart">
                    <CarFrom />
                </div>
                <div className="sliderOfMap">
                    <p
                        style={{
                            marginTop: "-20%",
                            marginLeft: "100%",
                            color: "rgb(90, 245, 250)"
                        }}
                    >
                        多
          </p>
                    <p
                        style={{
                            marginTop: "10vh",
                            marginLeft: "100%",
                            color: "rgb(90, 245, 250)"
                        }}
                    >
                        少
          </p>
                </div>
            </div>
        );
    }
}

export default CountryMap;
