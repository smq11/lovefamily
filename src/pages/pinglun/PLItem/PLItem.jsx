import React from 'react';
import './PLItem.less';
import {PLContext} from '../../../utils/utils';


class PLItem extends React.Component{
    // 使用Contex
    static contextType=PLContext;

    constructor(){
        super()
        this.state={
            flag:false,
            PLData:''
        }
    }
    // 点击评论
    toPL=(e)=>{
        this.setState({
            flag:true
        })
    }
    // 文本域的change事件
        changePL=(e)=>{
            this.setState({
                PLData:e.target.value
            })
        }
    // 提交评论事件
    putOn=(e)=>{
        console.log('successful!!');
        this.context(e.target.id);
        // 隐藏文本域
        this.setState({
            flag:false
        })
    }
    // 取消评论
    giveUp=()=>{
        this.setState({
            flag:false
        })
    }
    render(){
        let {data} = this.props;
        // console.log(this.context);
        return(
            <div className='PL-box'>
            <div className='PL-item'>
                <div className='PL-pic'>
                    <img src={data.img} />
                </div>
                
                <div className='PL-content'>
                    <p>商户:{data.title}</p>
                    <p>类型:{data.houseType}</p>
                    <p>价格:￥{data.price}</p>
                </div>
                <div className='PL-btns'>
                    {
                        data.commentState===0?
                        <button onClick={this.toPL}>评论</button>
                        :
                        data.commentState===2?
                        <button>已评论</button>
                        :
                        ''
                    }
                </div>
            </div>
            {/* 评论文本域 */}
            {this.state.flag?
                <div>
                    <textarea value={this.state.PLData}
                    onChange={this.changePL} 
                    className='PL-text'></textarea>
                    <button id={data.id} onClick={this.putOn}>提交</button>
                    <button onClick={this.giveUp}>取消</button>
                </div>
                :''}
            </div>
        )
    }
}

export default PLItem;