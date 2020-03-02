import React from 'react';
import PLHeader from '../../components/header/header';
import {connect} from 'react-redux';
import { fetchGet } from '../../utils/utils';
import PLV from './pinglunView.jsx';
import {PLContext} from '../../utils/utils';



class PL extends React.Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        // 需要先登录
        if(!this.props.user){
            this.props.history.push('/login');
        }else{
            // 网络请求
            fetchGet('/content/pinglun',{id:this.props.user})
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                this.setState({
                    list:data
                })
            })
        }
        
    }
    // 修改list的commentState的方法
    changeCommentState=(id)=>{
        let arr=this.state.list;
        for(let i=0;i<this.state.list.length;i++){
            if(arr[i].id==id){
                arr[i].commentState=2;
            }
        }
        this.setState({
            list:arr
        })
    }
    render(){
        return(
            <PLContext.Provider value={this.changeCommentState}>
                <PLHeader title='评论页面' />
                {this.state.list.length>0?
                <PLV list={this.state.list} />
                :
                <div>数据正在加载中...</div>
            }
                
            </PLContext.Provider>
        )
    }
}

export default connect((state)=>(
    {user:state.user,city:state.curcity})
    )(PL);