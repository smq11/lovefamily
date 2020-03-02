import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../pages/home/home';
import Life from '../pages/life/life';
import Shop from '../pages/shop/shop';
import Mine from '../pages/mine/mine';
import NotFound from '../pages/notFound/notFound';
import City from '../pages/city/city';
import Search from '../pages/search/search';
import Details from '../pages/details/details';
import Login from '../pages/login/login';
import PL from '../pages/pinglun/pinglun';

export default class MyRouter extends React.Component{

    render(){

        return(

            <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/shop' component={Shop}></Route>
                <Route path='/life' component={Life}></Route>
                <Route path='/mine' component={Mine}></Route>
                <Route path='/city' component={City}></Route>
                <Route path='/search/:keyword' component={Search}></Route>
                <Route path='/details/:id' component={Details}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/pinglun' component={PL}></Route>


                <Route path='*' component={NotFound}></Route>
            </Switch>
            </BrowserRouter>
        )
    }
}