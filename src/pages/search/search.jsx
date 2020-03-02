import React from 'react';
import {fetchGet} from '../../utils/utils.js';
import SearchList from './searchList/searchList';
import LoadMore from '../../components/loadMore/loadMore.jsx';
import SearchInput from '../../components/searchInput/searchInput.jsx';


export default class Search extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            flag:true,
            // sContent:''
        }
    }
    // input标签回车键，再次搜索
    // toSearchList=(e)=>{
    //     // 判断是否是回车键
    //     // console.log(e.keyCode);
    //     if(e.keyCode==13){
    //         this.setState({list:[]});
    //         this.props.history.push('/search/'+this.state.sContent);
    //     }
    // }
    // input标签change事件
    // changeScontent=(e)=>{
    //     this.setState({
    //         sContent:e.target.value
    //     })
    // }


    // 请求数据的普通函数
        getData=(keyword,cs)=>{
            this.setState({
                flag:cs
            })
            fetchGet('/content/search/'+keyword)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                let arr=this.state.list.concat(data.data);
                this.setState({
                    list:arr,
                    flag:true
                })
            })
        }
        // 组件渲染
        componentDidMount(){
            this.getData(this.props.match.params.keyword);
            // console.log('渲染');
            // 刷新时搜索框有输入// 设置到sContent
                // this.setState({
                //     sContent:this.props.match.params.keyword
                // })
        }
        // 组件更新
        componentDidUpdate(prevProps,prevState){
            if(prevProps.match.params.keyword!==this.props.match.params.keyword){
                // 先清理后加载
                this.setState({
                    list:[],
                    // sContent:this.props.match.params.keyword
                });


                // console.log('更新');
                this.getData(this.props.match.params.keyword);
                // 设置到sContent
                // this.setState({
                //     sContent:this.props.match.params.keyword
                // })

            }
        }
        // 返回历史记录
        back=()=>{
            this.props.history.goBack();
        }
    render(){
        return(
            <div>
                <div>
                    <i onClick={this.back} className='iconfont icon-fanhui'></i>

                    {/* input组件 */}
                    <SearchInput />

                </div>
                <SearchList list={this.state.list} />

                <LoadMore getData={this.getData} kw={this.props.match.params.keyword}
                     flag={this.state.flag} />
            </div>
        )
    }
}