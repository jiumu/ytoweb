/**
 * Created by Yx on 2016/8/20.
 */
var express = require('express');
var router = express.Router();
var RestResult = require('../dataTypes/RestResult.js');//返回数据
var SiteInfoModel=require('../models/SiteInfo.js').SiteInfoModel;
var SoftInfoModel=require('../models/SoftInfo.js').SoftInfoModel;

//获取网址信息
router.get('/siteinfo/list',function(req,res,next){
    SiteInfoModel.find(function(err,sites){
        if(err)return next(err);
        var rest=new RestResult();
        rest.returnValue=sites;
        res.json(rest);
    })
});

router.get('/softinfo/list',function(req,res,next){
    SoftInfoModel.find(function(err,softInfoes){
        if(err) return next(err);
        var rest = new RestResult();
        rest.returnValue = softInfoes;
        res.json(rest);
    })
})

//导出模块
module.exports = router;