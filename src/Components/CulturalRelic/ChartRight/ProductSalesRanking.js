import React from "react";
import style from './CulturalRelicRight.module.css'

export default class ProductSalesRanking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList : [
                { name: "唐代公仔", counts: 354, type: "玩具", designDpt: "某文创公司设计部",factroy:"义务小商品城" },
                { name: "宫廷纸胶带", counts: 250, type: "文具", designDpt: "某文创公司设计部",factroy:"义务小商品城" },
                { name: "场景拼图", counts: 172, type: "玩具", designDpt: "某文创公司设计部",factroy:"义务小商品城" },
                { name: "人物冰箱贴", counts: 130, type: "生活", designDpt: "某文创公司设计部",factroy:"义务小商品城" },
                { name: "文创钥匙扣", counts: 55, type: "生活", designDpt: "某文创公司设计部",factroy:"义务小商品城" },
                { name: "卡通马克杯", counts: 51, type: "生活", designDpt: "某文创公司设计部",factroy:"义务小商品城" },
                { name: "纪念T恤", counts: 42, type: "衣物", designDpt: "某文创公司设计部",factroy:"义务小商品城" }
            ],
        };
    }

    generateTable = () => {
        return this.state.productList.map((item, index) => {
            return (
                <tr key={index} className={style.tableRow}>
                    <td className={style.tableBorder}>{item.name}</td>
                    <td className={style.tableBorder}>{item.counts}</td>
                    <td className={style.tableBorder}>{item.type}</td>
                    <td className={style.tableBorder}>{item.designDpt}</td>
                    <td className={style.tableBorder}>{item.factroy}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className={style.productsTableBox}>
                    <table className={style.productsTable}>
                        <thead>
                            <tr className={style.tableThead}>
                                <th className={style.tableBorder}>名称</th>
                                <th className={style.tableBorder}>数量</th>
                                <th className={style.tableBorder}>类别</th>
                                <th className={style.tableBorder}>设计单位</th>
                                <th className={style.tableBorder}>厂商</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.generateTable()}
                        </tbody>
                    </table>
                </div>
        );
    }
}