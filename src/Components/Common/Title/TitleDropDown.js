import React, { PureComponent }  from "react";
import { Select, Icon } from 'antd';
import style from "./TitleDropDown.module.css";
const { Option } = Select;

class TitleDropDown extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           value : this.props.options[0].value
        };
    }

    componentDidMount() {
        this.setState({value:this.getValue()});
    }

    handleChange = (value) => {
        this.props.history.push(this.getPath(value));
        this.setState({value:this.getValue()});
    }

    getPath = (value) => {
        for(let i=0 ; i< this.props.options.length; i++){
            if(value === this.props.options[i].value){
                return this.props.options[i].path;
            }
        }
    }

    getValue = () => {
        let path = this.props.history.location.pathname;
        console.log(path);
        for(let i=0; i< this.props.options.length; i++){
            if(path === this.props.options[i].path){
                return this.props.options[i].value;
            }
        }

        if(path.indexOf('buildingControl') > 0){
            return 'buildingControl';
        }

        return this.props.options[0].value;
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.path !== nextProps.path){
            this.setState({value:this.getValue()});
        }
    }

    render() {
        const icon = <Icon type="caret-down" style={{ color: "rgb(0, 83, 229)" }} />
        return (
            <div>
                <Select
                    value={this.state.value}
                    size="small"
                    suffixIcon={icon}
                    dropdownClassName={style.titleDropdownMenu}
                    onChange={this.handleChange}
                >
                    {this.props.options.map(key => (<Option key={key.value}>{key.text}</Option>))}
                </Select>
            </div>
        )
    }
}

export default TitleDropDown;