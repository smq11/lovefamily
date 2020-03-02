import React from 'react';
import PLItem from './PLItem/PLItem';


class PLV extends React.Component{
   
    render(){
        return(
            <div>
                {this.props.list.map((ele,index)=>{
                    return <PLItem key={index} data={ele} />
                })}
            </div>
        )
    }
}

export default PLV;