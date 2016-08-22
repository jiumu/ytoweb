/**
 * Created by Yx on 2016/8/20.
 */
var base = require('./Base.js');

var SoftInfoSchema= new base.Schema({
    text:String,
    url:String,
    downloadCount:{
        type:Number,
        default:0
    }
})


var SoftInfoModel = base.mongoose.model('SoftInfoModel',SoftInfoSchema,'softInfoes');

exports.SoftInfoModel=SoftInfoModel;