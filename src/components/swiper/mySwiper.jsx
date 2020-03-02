import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './mySwiper.less';
// 分页组件
import MyPagination from './pagination/pagination';

import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export default class MySwiper extends React.Component {
    constructor(){
        super()
        this.state={
            index:''
        }
    }

    // 获取下标
    getIndex = (index) => {
        // console.log(index);
        this.setState({
            index:index
        })
    }

    render() {

        return (
            <div className='mySwiper'>
                <AutoPlaySwipeableViews onChangeIndex={this.getIndex} className='swiperBox'>

                    {this.props.arr.map((ele, index) => {
                        return (
                            <div key={index}>
                                <img src={ele} />
                            </div>
                        )
                    })}
                </AutoPlaySwipeableViews>

                {/* 分页器组件 */}
                <MyPagination index={this.state.index} size={this.props.arr.length} />
            </div>
        )
    }
}