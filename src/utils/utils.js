import React from 'react';
// 处理fetch请求
import qs from 'querystring';


 export function fetchPost(url,data){

    return fetch(url,{
        method:'post',
        headers:{
            'content-type':'application/x-www-form-urlencoded'
        },
        body:qs.stringify(data)
    })
}

export function fetchGet (url,data){
    let strData = qs.stringify(data);
    if(url.indexOf('?')==-1){
        url=url+'?'+strData;
    }else{
        url=url+'&'+strData;
    }
    return fetch(url);
}

export const PLContext=React.createContext();

