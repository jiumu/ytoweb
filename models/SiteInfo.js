/**
 * Created by Yx on 2016/8/17.
 */
var base=require('./Base.js');

var SiteInfoSchema = new base.Schema({
    text:String,
    title:String,
    url:String
});

var SiteInfoModel=base.mongoose.model('SiteInfoModel',SiteInfoSchema,'siteInfos');

exports.SiteInfoModel=SiteInfoModel;