import React from 'react';
import { Input ,Modal } from 'antd';
import pic1 from "./Image/pic1.png"
import pic2 from "./Image/pic2.png"
import pic3 from "./Image/pic3.png"
import bigPic from "./Image/bigPic.png"
import style from './Content.module.css'


const { Search } = Input;
const data = [
    {
        name:"青玉雕螭佩",
        pic: pic1,
        typeNum:1110516156165165161,
        num:1,
        legend:"清(1616~1911)",
        type:"佩",
        size:"5cm×5cm×1.4cm",
        weight:"24.7kg",
        createdDate:"2019-01-01"
    },  {
        name:"青玉龙首光背带扣",
        pic: pic2,
        typeNum:1110516156165165163,
        num:1,
        legend:"清(1616~1911)",
        type:"扣",
        size:"4.7cm×14.1cm×1.2cm",
        weight:"4.35g",
        createdDate:"2019-01-01"
    },  {
        name:"青玉莲蓬水丞",
        pic: pic3,
        typeNum:1110516156165165163,
        num:1,
        legend:"清(1616~1911)",
        type:"水丞",
        size:"5.3cm×5.3cm×4.9cm",
        weight:"56.1g",
        createdDate:"2019-01-01"
    }, {
        name:"青玉莲蓬水丞",
        pic: pic3,
        typeNum:1110516156165165163,
        num:1,
        legend:"清(1616~1911)",
        type:"水丞",
        size:"5.3cm×5.3cm×4.9cm",
        weight:"56.1g",
        createdDate:"2019-01-01"
    }
];
export default class CollectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:"",
            popPaneVisible:false,
            modalTitle:""
        };
    }
    closePanel = () => {
        this.setState({
            popPaneVisible:false
        })
    }
    handleImgClick = (name) => {
        console.log(name)
        this.setState({
            popPaneVisible:true,
            modalTitle:name
        })
    }
    generateTable = () => {
        return data.map((item,index) => {
            if(this.state.inputValue) {
                if(item.name.indexOf(this.state.inputValue) === -1)
                    {
                        return null;
                    }
            }
            return (
                <tr key={index} className={style.tableTr}>
                    <td>{index}</td>
                    <td>
                        <img 
                            src={item.pic} 
                            alt="" 
                            style={{height:"95%",cursor: "pointer"}}
                            onClick={this.handleImgClick.bind(this,item.name)}    
                        />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.typeNum}</td>
                    <td>{item.num}</td>
                    <td>{item.legend}</td>
                    <td>{item.type}</td>
                    <td>{item.size}</td>
                    <td>{item.weight}</td>
                    <td>{item.createdDate}</td>
                </tr>
                )
        })
    }

    handleInput = (value) => {
        this.setState({
            inputValue:value
        })
    }
    render() {
        return (
            <div className={style.chartPane}>
                <div className={style.inputArea}>
                    <Search
                        placeholder="请输入藏品名称"
                        onSearch={this.handleInput}
                        className={style.searchInput}
                    />
                </div>
                <div className={style.tableArea}>
                    <table className={style.collectionTable}>
                        <thead>
                            <tr className={style.tableHeader}>
                                <th>序号</th>
                                <th>缩略图</th>
                                <th>藏品名称</th>
                                <th>分类号</th>
                                <th>数量</th>
                                <th>年代</th>
                                <th>类别</th>
                                <th>尺寸</th>
                                <th>重量</th>
                                <th>创建时间</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.generateTable()}
                        </tbody>
                    </table>
                </div>
                <Modal
                    title={this.state.modalTitle}
                    visible={this.state.popPaneVisible}
                    footer={null}
                    onCancel={this.closePanel}
                    className={style.collectionModal}
                >
                    <div>
                        <img src={bigPic} alt="" style={{width:"100%"}} />
                    </div>
                </Modal>
            </div>
        )
    }
}