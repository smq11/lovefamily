import React from 'react';
import Nav from '../../components/nav/nav';
import './home.less';
import MySwiper from '../../components/swiper/mySwiper';
import Pic1 from '../../static/images/banner1.png';
import Pic2 from '../../static/images/banner2.png';
import Pic3 from '../../static/images/banner3.png';
import HomeProduct from './homeProduct/homeProduct';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchInput from '../../components/searchInput/searchInput';


class Home extends React.Component {
    // constructor(){
    //     super()
    //     this.state={
    //         sContent:''
    //     }
    // }

    // toSearchList=(e)=>{
    //     // 判断是否是回车键
    //     // console.log(e.keyCode);
    //     if(e.keyCode==13){
    //         this.props.history.push('/search/'+this.state.sContent);
    //     }
    // }
    // changeScontent=(e)=>{
    //     this.setState({
    //         sContent:e.target.value
    //     })
    // }

    render() {

        return (

            <div className='header-outBox'>
                {/* 头部 */}
                <header className='home-header'>
                        <span>
                            <Link to='/city'>{this.props.city}<i className='iconfont icon-xiala'></i></Link>
                        </span>
                        {/* 搜索框 */}
                        <SearchInput />
                        {/* <input onChange={this.changeScontent} 
                        value={this.state.sContent} 
                        onKeyUp={this.toSearchList} /> */}
                        <Link to='/pinglun'>
                            <i className='iconfont icon-pinglun'></i>
                        </Link>
                </header>
                {/* 轮播图 */}
                <MySwiper arr={[Pic1, Pic2, Pic3]} />

                {/* 热销单品 */}
                <HomeProduct title='热销单品' />

                {/* 家庭常用 */}
                <HomeProduct title='家庭常用' />

                <Nav />
            </div>
        )
    }
}


export default connect((state)=>{
    return {
        city:state.curCity
    }
})(Home)