/**
 * Created by Yx on 2016/8/15.
 */
var base=require('./Base.js');
var ObjectId = base.ObjectId;
var AdminUserSchema = new base.Schema({
    username:String,    //用户名
    password:String,    //密码
    lastLoginTime:Date //最后登录时间
});
//发布model
var AdminUserModel = base.mongoose.model('AdminUserModel',AdminUserSchema,'adminUsers');


//导出model
exports.AdminUserModel=AdminUserModel;