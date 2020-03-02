import React from 'react';
import Item from '../item/item';

export default class SearchList extends React.Component{
    componentDidMount(){
        console.log(this.props);
    }
    componentDidUpdate(){
        console.log(this.props);
        // let t = new Date().getTime();
        // console.log(t);
    }

    render(){
        let {list}=this.props
        return(

            <div>
                {list.length>0?
                    list.map((ele,index)=>{
                        return <Item curData={ele} key={index} />
                    })
                    :
                    <div>数据正在加载中...</div>
                }
            </div>
        )
    }
}