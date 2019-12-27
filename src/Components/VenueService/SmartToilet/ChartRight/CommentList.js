import React, { PureComponent } from 'react';
import style from './CommentList.module.css';

export default class CommentList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ["卫生很好，好评！", "卫生还行，一般。", "脏的很，差评！！","卫生很好，好评！", "卫生还行，一般。", "脏的很，差评！！","卫生很好，好评！", "卫生还行，一般。", "脏的很，差评！！", ],
            commentDate: ['2019-01-09','2019-01-09','2019-01-09','2019-01-09','2019-01-09','2019-01-09','2019-01-09','2019-01-09','2019-01-09','2019-01-09','2019-01-09',],
        };
    }
    getFaceType = (index) => {
        if(index%3===0){
            return style.great;
        }else if(index%3===1){
            return style.normal;
        }else{
            return style.bad;
        }
    }

    render() {
        const tableInit = this.state.commentText.map((item, index) => {
            return (
                <tr className={(index % 2 === 0) ? style.rightTableEvenRow : style.rightTableOddRow} key={index * 5}>
                    <td><div className={this.getFaceType(index)}></div></td>
                    <td>{item}</td>
                    <td className={style.tableBorder} >{this.state.commentDate[index]}</td>
                </tr>
            )
        });

        return (
            <div className={style.commentTable} >
                <table style={{
                    margin: '10px auto',
                    width: "90%",
                    height: "90%",
                    borderTop: "1px rgba(0, 110, 227, 0.5) solid"
                }}>
                    <thead>
                        {null}
                    </thead>
                    <tbody>
                        {tableInit}
                    </tbody>
                </table>
            </div>
        )
    }
}
