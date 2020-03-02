import React from 'react';
import './hotCities.less';
import {connect} from 'react-redux';
import {setCity} from '../../../store/action/cityAction.js';

class HotCities extends React.Component {
    constructor() {
        super()
        this.state = {
            cityList: ['北京', '上海', '天津', '杭州', '广州', '苏州', '哈尔滨', '沈阳', '长春', '深圳', '西安', '成都', '昆明']
        }
    }

    componentDidMount(){
        // console.log(this.props);
    }
    selectCity=(e)=>{
        this.props.setCity(e.target.innerHTML);
        this.props.history.goBack();
    }
    render() {

        return (

            <div>

                <div className='hotCities'>
                    <h2>热门城市</h2>
                    <div className='hotCities'>
                        <ul onClick={this.selectCity}>
                            {this.state.cityList.map((ele, index) => {
                                return <li key={index}>{ele}</li>
                            })}
                        </ul>
                    </div>

                </div>


            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    console.log(state);
    return {
        city:state.curCity
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        'setCity':(data)=>{
            dispatch(setCity(data))
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotCities);