import React from 'react';
import './commendView.less';
import star from '../../../static/images/star.png';
import chat from '../../../static/images/chat.png';

export default class CommendView extends React.Component{

    render(){

        return(

            <div>
                {this.props.data.map((ele,index)=>{
                     return (<div className='item' key={index}>
                        <div>
                            <i className='iconfont icon'></i>
                            <span>{ele.username}</span>
                        </div>
                        <div>
                            {[1,1,1,1,1].map((elem,ind)=>{
                                return <img style={{'width':'12px'}} key={ind} src={(ind+1)<=ele.star? star:chat} />
                            })}
                        </div>
                        <div>{ele.comment}</div>
                    </div>)
                })}
            </div>
        )
    }
}