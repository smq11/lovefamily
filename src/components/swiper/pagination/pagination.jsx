import React from 'react';
import './pagination.less'

 class MyPagination extends React.Component{
     constructor(){
         super()
        
     }

    render(){
        let count=this.props.size;
        let newArr=new Array(count).fill(1);
        // console.log(newArr);
        return(

            <div className='myPagination-box'>
                <ul>
                    {newArr.map((ele,index)=>{
                        return <li key={index} className={index==this.props.index?'myPagination-item active':'myPagination-item'}></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default MyPagination;