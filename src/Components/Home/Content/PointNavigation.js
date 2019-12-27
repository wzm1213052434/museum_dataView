import React from 'react'
import style from "./Content.module.css"
import { HOME_CONST } from './Const.js';

class PointNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointTags: [HOME_CONST.BROADCAST_TAGS, HOME_CONST.VIDEO_TAGS, HOME_CONST.WC_TAGS, HOME_CONST.WIFI_TAGS,
                HOME_CONST.EMERGENCY_TAGS, HOME_CONST.SECURITY_TAGS, HOME_CONST.ENVIRONMENTAL_TAG],
            pointLists: HOME_CONST.POINT_LIST
        };
    }

    handleClick = event => {
        let type = event.target.name;
        let pointTags = this.state.pointTags.map(key => {
            if (key.type === type) {
                key.selected = !key.selected;
            }
            return key;
        });

        let pointLists = this.state.pointLists.map(key => {
            if (key.name === type) {
                key.selected = !key.selected;
            }
            return key;
        })
        this.setState({
            pointTags: pointTags,
            pointLists: pointLists
        });

    };

    render() {
        return (
            <div>
              <div className={ this.props.picShow ? style.innerRoom : style.anotherInnerRoom }>
                <div className={ style.pointContainer }>
                  { this.state.pointTags.map(type => {
                        if (type.selected) {
                            return type.data.map(key => <div key={ key.text }>
                                                          <img src={ type.srcUrl } style={ { left: key.x + '%', top: key.y + '%' } } className={ style.pointTagImg } alt="点位导航气泡" />
                                                          <p style={ { left: key.x + 4 + '%', top: key.y + 2.5 + '%' } } className={ style.pointTagText }>
                                                            { key.text }
                                                          </p>
                                                        </div>)
                        }
                        else return [];
                    }) }
                </div>
              </div>
              <div className={ style.pointNavigation }>
                <div className={ style.pointTitle }>点位导航</div>
                <div className={ style.pointList }>
                  { this.state.pointLists.map(key => <div key={ key.name } className={ style.pointItem }>
                                                       <img name={ key.name } src={ key.selected ? key.selectedSrc : key.unselectedSrc } className={ style.pointItemImg } alt="点位导航图标" onClick={ this.handleClick } />
                                                       <p>
                                                         { key.text }
                                                       </p>
                                                     </div>
                    ) }
                </div>
              </div>
            </div>
        )
    }
}

export default PointNavigation;