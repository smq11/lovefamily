import React,{Component} from 'react';
import {fetchGet} from '../../../utils/utils';
import CommendView from '../commendView/commendView';
import LoadMore from '../../../components/loadMore/loadMore';

export default class Commend extends React.Component{
    constructor(){
        super()
        this.state={
            commendData:[],
            hasMore:false,
            flag:true
        }
    }

    componentDidMount(){
        // console.log(this.props.id);
        this.getData();
        
    }
    getData=(kw,bool)=>{
        this.setState({
            flag:bool
        })
        fetchGet('/content/commend',{id:this.props.id})
        .then(data=>data.json())
        .then(res=>{
            // console.log(res);
            this.setState({
                commendData:this.state.commendData.concat(res.data),
                hasMore:res.hasMore,
                flag:true
            })
        })
    }
    render(){

        return(

            <div>
                <h2>评论</h2>
                {/* 评论内容 */}
                {this.state.commendData.length>0?
                <CommendView data={this.state.commendData} />
                :
                <div>数据正在加载中...</div>}
                {/* 加载更多按钮 */}
                {this.state.hasMore ? 
                <LoadMore kw='' getData={this.getData} flag={this.state.flag} />
                :''}
                
            </div>
        )
    }
}