import React from 'react';
import Nav from '../../components/nav/nav';
import MineHeader from '../../components/header/header';

export default class Mine extends React.Component{

    render(){

        return(

            <div>
                <MineHeader title='个人中心'></MineHeader>
                <h2>MINE</h2>
                <Nav />
            </div>
        )
    }
}