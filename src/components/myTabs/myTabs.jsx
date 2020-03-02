import React from 'react';
import './myTabs.css';

export default class MyTabs extends React.Component{
    constructor(){
        super()
        this.state={
            cur:'1'
        }
    }
    componentDidMount(){
        if(this.props.defaultActiveKey){
            this.setState({
                cur:this.props.defaultActiveKey
            })
        }
    }
    changeTab=(e)=>{
        // console.log(e.target.id);
        this.setState({
            cur:e.target.id
        });
        this.props.onChange(e.target.id);
    }
    

    render(){

        return(

            <div className='myTab'>
                {/* 头部 */}
                <div>
                    <ul onClick={this.changeTab}>
                        {/* <li style={{'color':this.state.cur==='message'?'red':''}}></li>
                        <li></li> */}
                        {React.Children.map(this.props.children,(ele,index)=>{
                            // console.log(this);
                            return <li style={{'color':this.state.cur===ele.props.okey?'red':''}}
                                    id={ele.props.okey}>
                                        {ele.props.tab}
                                    </li>
                        })}
                    </ul>
               </div> 
                {/* 内容部分 */}
                <div className='myTab-content'>
                    <ul onClick={this.changeTab}>
                        {React.Children.map(this.props.children,(ele,index)=>{
                            // console.log(ele);
                            return <div className={this.state.cur===ele.props.okey?'active':''}>
                                        {ele.props.children}
                                    </div>
                        })}
                    </ul> 
               </div>
            </div>
        )
    }
}