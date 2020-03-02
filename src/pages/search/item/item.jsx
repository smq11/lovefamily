import React from 'react';
import './item.less'
import { Link } from 'react-router-dom';

export default class Item extends React.Component{

    render(){
        let curData=this.props.curData;
        return(

            <div className='itemBox'>
                <Link to={`/details/${curData.id}`}>
                <div className='img'>
                    <img src={curData.img}/>
                </div>
                <div className='left'>
                    <p>{curData.title}</p>
                    <p>{curData.houseType}</p>
                </div>
                <div className="right">
                    <p>{curData.tentType}</p>
                    <p>{curData.price}</p>
                    {/* dangerouslySetInnerHTML将字符串标签解析成真正的dom元素 */}
                    <p dangerouslySetInnerHTML={{__html: curData.price+"/月"}}></p>
                </div>
                </Link>
            </div>
        )
    }
}