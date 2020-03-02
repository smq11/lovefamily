import React from 'react';
import CityHeader from '../../components/header/header';
import HotCities from './hotCities/hotCities';
import {connect} from 'react-redux';


class City extends React.Component{

    render(){

        return(

            <div>
                <CityHeader title='城市选择'></CityHeader>

                {/* 当前城市 */}
                <div className='curCity'>
                    <p>当前城市:{this.props.city}</p>
                </div>
                {/* 热门城市 */}
                <HotCities history={this.props.history} />
            
            
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        city:state.curCity
    }
})(City);