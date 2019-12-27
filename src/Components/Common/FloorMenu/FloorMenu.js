import React from 'react'
import style from "./FloorMenu.module.css"
import { Menu, Dropdown, Icon } from 'antd';

class FloorMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            floor: "一号楼"
        };
    }

    changeBackOfPar(index) {
        this.props.childTransMes(index);

    }
    render() {
        const onClick = ({ key }) => {
            this.setState({
                floor: key
            })
        };

        const menu = (
            <Menu>
                <Menu.Item key="一号楼" onClick={onClick}>
                    一号楼
          </Menu.Item>
                <Menu.Item key="二号楼" onClick={onClick}>
                    二号楼
          </Menu.Item>
                <Menu.Item key="三号楼" onClick={onClick}>
                    三号楼
          </Menu.Item>
            </Menu>
        );

        return (
            <div className={style.floorNavigation}>
                <div style={{ width: "100 %", height: "100%" }}>
                    <div className={style.floorMenuTitle}>
                        <div style={{ paddingTop: '1%', fontSize: '1rem' }}>楼层选择</div>
                        <Dropdown overlay={menu} trigger={['click']} size='large' style={{ width: "100% !important", height: "100% !important" }} overlayClassName={style.floorMnuDropdown}>
                            <button className={style.antDropdownLink} >
                                <span>{this.state.floor}</span><Icon style={{ fontSize: '1.5rem', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', margin: '40% 0 0 70%' }} type="caret-down" />
                            </button>
                        </Dropdown>
                    </div>
                    <div className={style.floorMenuContent}>
                        {(this.state.floor === "一号楼") ?
                            <div className={style.floorMenuPopContent}>
                                <p style={{ marginTop: '15%' }} onClick={this.changeBackOfPar.bind(this, "0")}>一层</p>
                                <p style={{ marginTop: '50%' }} onClick={this.changeBackOfPar.bind(this, "1")}>二层</p>
                                <p style={{ marginTop: '85%' }} onClick={this.changeBackOfPar.bind(this, "2")}>三层</p>
                            </div>
                            :
                            (
                                (this.state.floor === "二号楼") ?
                                    <div className={style.floorMenuPopContent}>
                                        <p style={{ marginTop: '15%' }} onClick={this.changeBackOfPar.bind(this, "3")}>一层</p>
                                        <p style={{ marginTop: '50%' }} onClick={this.changeBackOfPar.bind(this, "4")}>二层</p>
                                        <p style={{ marginTop: '85%' }} onClick={this.changeBackOfPar.bind(this, "5")}>三层</p>
                                    </div>
                                    :
                                    <div className={style.floorMenuPopContent}>
                                        <p style={{ marginTop: '15%' }} onClick={this.changeBackOfPar.bind(this, "6")}>一层</p>
                                        <p style={{ marginTop: '50%' }} onClick={this.changeBackOfPar.bind(this, "7")}>二层</p>
                                    </div>
                            )}
                    </div>
                </div>
            </div>


        )
    }
}

export default FloorMenu;