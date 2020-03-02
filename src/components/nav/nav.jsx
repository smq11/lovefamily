import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.less';

export default class Nav extends React.Component {

    render() {

        return (

            <div className='navBox'>
                <div>
                    <NavLink to='/' exact>
                        <i className='iconfont icon-shouye'></i>
                        首页
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/shop'>
                        <i className='iconfont icon-shangcheng'></i>
                        商城
                    </NavLink>
                </div>
                <div>
                    <NavLink to='life'>
                        <i className='iconfont icon-fuwu'></i>
                        生活服务
                    </NavLink>
                </div>
                <div>
                    <NavLink to='mine'>
                        <i className='iconfont icon-wodedangxuan'></i>
                        我的
                    </NavLink>
                </div>
            </div>
        )
    }
}