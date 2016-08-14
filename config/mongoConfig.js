/**
 * Created by yx on 2016/8/14.
 */
var mongoose=require('mongoose');//引入mongoose库
mongoose.connect('mongodb://localhost:27017/yto');//mongodb连接地址,yto为数据库名称

exports.mongoose=mongoose;//导出mongoose对象