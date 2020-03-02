import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchInput extends React.Component{
    constructor(){
        super()
        this.state={
            sContent:''
        }
    }

    changeScontent=(e)=>{
        this.setState({
            sContent:e.target.value
        })
    }
    toSearchList=(e)=>{
        if(e.keyCode==13){
            this.props.history.push('/search/'+this.state.sContent);
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.keyword !=this.props.match.params.keyword){
            this.setState({
                sContent:this.props.match.params.keyword
            })
        }
    }
    render(){

        return(
            <div>
                <i className='iconfont icon'></i>
                <input value={this.state.sContent}
                    onChange={this.changeScontent}
                    onKeyUp={this.toSearchList} />
            </div>
        )
    }
}

export default withRouter(SearchInput);