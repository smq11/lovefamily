import React from 'react';
import {fetchPost} from '../../utils/utils.js';
import DHeader from '../../components/header/header';
import DSwiper from '../../components/swiper/mySwiper';
import MyTabs from '../../components/myTabs/myTabs';
import Commend from './commend/commend';
import './details.less';
import {connect} from 'react-redux';
import {setUser} from '../../store/action/userAction';
import {setSC,removeSC} from '../../store/action/scAction';

class Details extends React.Component{
    constructor(){
        super()
        this.state={
            detailData:{},
            flag:''
        }
    }

    componentDidMount(){
        // console.log(this.props);
        // 判断当前是否收藏过
        if(this.props.sc.indexOf(this.props.match.params.id)!=-1){
            // 已收藏 显示已收藏的按钮
            this.setState({
                flag:true
            })
        }else{
            // 未收藏
            this.setState({
                flag:false
            })
        }

        const id = this.props.match.params.id;
        fetchPost('/content/details',{id:id})
        .then(data=>data.json())
        .then(res=>{
            console.log(res);
            this.setState({
                detailData:res
            })
        })
    }

    callback=(e)=>{
        // console.log(e);
    }
    // 收藏事件
    sc=()=>{
        // 判断用户是否登录
        if(this.props.user){
            //登录过 执行收藏
            this.props.setSC(this.props.match.params.id);
            this.setState({
                flag:true
            })
        }else{
            // 没登陆过
            console.log('没登陆');
            this.props.history.push('/login');
        }
    }

    // 取消收藏
    notSC=()=>{
        console.log('取消收藏');
        this.props.removeSC(this.props.match.params.id);
        this.setState({
            flag:false
        })
    }

    render(){

        return(

            <div className='details-page'>
                <DHeader title='详情页' />
                {this.state.detailData.imgs ?
                <DSwiper arr={this.state.detailData.imgs} />
                :
                ''}

                {/* tab切换 */}
                <MyTabs defaultActiveKey='1' onChange={this.callback}>
                    <div tab='房屋信息' okey='1'>
                        <p>{this.state.detailData.title}</p>
                        <div className='btns'>
                            <div className='details-left'>
                                {
                                    this.state.flag? 
                                    <button onClick={this.notSC} className='acolor'>已收藏</button>
                                    :
                                    <button className='active' onClick={this.sc}>收藏</button>
                                }
                                
                                
                            </div>
                            <div className='btns-right'>
                                <button>购买</button>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div tab='房屋评价' okey='2'>
                        <Commend id={this.props.match.params.id} />
                    </div>
                </MyTabs>
            </div>
        )
    }
}


// 获取reduc数据
function mapStateToProps(state){
    return {
        user:state.user,
        sc:state.sc
    }
}
// 写入功能
function maoDispatchToProps(dispatch){
    return {
        setUser:(data)=>{dispatch(setUser())},
        setSC:(data)=>{dispatch(setSC(data))},
        removeSC:(data)=>{dispatch(removeSC(data))},
    }
}
export default connect(mapStateToProps,maoDispatchToProps)(Details);