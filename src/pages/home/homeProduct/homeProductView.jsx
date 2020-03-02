import React from 'react';
import './homeProductView.less';


export default class HomeProductView extends React.Component{

    render(){
        return(

            <div className='home-product-box'>
                <p className='home-product-title'>{this.props.title}</p>
                <div className='home-product-content'>
                    <div>

                        {this.props.homeProductArr.map((arr,index)=>{
                            return(
                                    <div key={index} className='home-product-item'>
                                        <img src={arr.img}/>
                                        <p>{arr.title}</p>
                                    </div>
                                
                            )
                        })
                    }
                        

                    </div>

                </div>
            </div>
        )
    }
}