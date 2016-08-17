/**
 * Created by Yx on 2016/8/17.
 */
var base=require('./Base.js');

var UserSchema=new  base.Schema({
    username:String,
    password:String
})

var UserModel = base.mongoose.model('UserModel',UserSchema,'users');

exports.UserModel=UserModel;