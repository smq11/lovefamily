import React from 'react';

export default class LoadMore extends React.PureComponent {
    constructor() {
        super()
        // 创建ref
        this.myDiv = React.createRef();
        this.state={
            timer:null
        }
    }

    componentDidUpdate(){
        // console.log('触发了');
    }

    componentDidMount() {
        console.log(this.props);

        let _this=this;
        // 获取dom元素
        let myDiv = this.myDiv.current;
        // console.log(this.myDiv.current);

        // 绑定滚动事件
        window.addEventListener("scroll", () => {
            // // 获取高度
            // console.log(myDiv.getBoundingClientRect().top);
            // // 获取元素距离页面顶部的高度
            // console.log('元素距离页面顶部的高度',myDiv.offsetTop);
            // // 滚动高度
            // console.log('滚动高度', document.documentElement.scrollTop);
            // // 可视窗口高
            // console.log('可视窗口的高',document.documentElement.clientHeight);


            // 方案1：传flag
            if(this.myDiv.current){
                if ((document.documentElement.clientHeight + 50) >=
                    this.myDiv.current.getBoundingClientRect().top && this.props.flag) {
                    console.log('到底了');
                    this.props.getData(this.props.kw,false);   
                }
            }

            // 方案2：定时器
            // if ((document.documentElement.clientHeight + 50) >=
            //     this.myDiv.current.getBoundingClientRect().top) {
                
            //     if(this.state.timer){
            //         clearTimeout(this.state.timer);
            //     }
            //     // 只执行最后一次
            //     this.state.timer=setTimeout(function(){
            //         console.log('到底了');
            //         _this.props.getData(_this.props.kw);
            //     },10)       
            // }



        })

    }

    render() {
        return (
            <div ref={this.myDiv} style={{ 'color': '#bbb', 'textAlign': 'center' }}>
                <h2>加载更多...</h2>
            </div>
        )
    }
}