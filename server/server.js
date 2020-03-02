let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let beijingData=require('./data/home/beijing_homehot.js');
let shanghaiData=require('./data/home/shanghai_homehot.js');
let searchData=require('./data/search/index.js');
let detailsData=require('./data/details/index.js');
let commendData =require('./data/comment/index.js');
let pinglunData=require('./data/shopcar/index');

app.use(bodyParser.urlencoded({extended:true}));

// Home数据
app.get('/homedata',function(req,res){
    let city=req.query.city;
    // console.log(city);
    if(city==='beijing'){
        res.send(beijingData);
    }else{
        res.send(shanghaiData);
    }

})

// 搜索接口
// get接收参数方式
// restful的普通数据
// ?携带的普通数据
app.get('/search/:skw',function(req,res){
    // console.log(req.params);
    res.send(searchData)
})

// 详情数据 post接口
app.post('/details',function(req,res){
    let id=req.body.id;
    // console.log('详情id'+id);
    res.send(detailsData);

})

// 获取评论接口
app.get('/commend',function(req,res){
    let id=req.query.id;
    console.log(id);
    res.send(commendData);
})

// 写入评论的接口
app.get('/pinglun',function(req,res){
    let id=req,query;
    res.send(pinglunData);
})

app.listen(4000,function(){
    console.log(4000);
})