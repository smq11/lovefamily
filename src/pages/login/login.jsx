import React from 'react';
import {connect} from 'react-redux';
import {setUser} from '../../store/action/userAction';

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    changeUser=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    login=()=>{
        // 直接登录成功，把用户名存储到redux中
        this.props.setUser(this.state.username);
        // 返回上一层页面
        this.props.history.goBack();
    }
    render(){
        return(
            <div>
                <input onChange={this.changeUser} type="text"
                 value={this.state.username}/>

                 <button onClick={this.login}>登录</button>
            </div>
        )
    }
}


export default connect(null,(dispatch)=>{
    return{
        setUser:(data)=>{dispatch(setUser(data))}
    }
})(Login);