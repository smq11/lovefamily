import React from 'react';
import HomeProductView from './homeProductView.jsx';
import {fetchGet} from '../../../utils/utils.js';


class HomeProduct extends React.Component{
    constructor(){
        super()
        this.state={
            productData:[]
        }
    }

    componentDidMount(){
        fetchGet('/content/homedata',{city:'bj'})
        .then(data=>data.json())
        .then(res=>{
            if(this.props.title=='热销单品'){
                this.setState({
                    productData:res.hot1
                })
            }else{
                this.setState({
                    productData:res.hot2
                })
            }
        });
    }


    render(){
        // console.log(this.state);
        return(
            <div>
                {this.state.productData.length>0 ? 
                <HomeProductView title={this.props.title}
                 homeProductArr={this.state.productData} />
                :
                <div>数据正在加载中...</div>
            }
                
            </div>
        )
    }
}

export default HomeProduct;