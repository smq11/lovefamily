import React from 'react';
import './header.less';
import {withRouter} from 'react-router-dom';

class Header extends React.Component{

    back=()=>{
        this.props.history.goBack();
        console.log(this.props);
    }

    render(){

        return(

            <div className='header-bg'>
                <i onClick={this.back} className='iconfont icon-fanhui fanhui'><span>返回</span></i>
                <span className='header-title'>{this.props.title}</span>
            </div>
        )
    }
}

export default withRouter(Header);