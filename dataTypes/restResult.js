/**
 * Created by Yx on 2016/8/15.
 */
var RestResult = function(){
    this.errorCode = RestResult.NO_ERROR ;
    this.returnValue = {};
    this.errorReason = "成功";
};



RestResult.NO_ERROR = 0;//无错误  
RestResult.ILLEGAL_ARGUMENT_ERROR = 1;//无效参数错误  
RestResult.BUSINESS_ERROR = 2;//业务错误  
RestResult.AUTH_ERROR = 3;//认证错误  
RestResult.SERVER_EXCEPTION_ERROR = 5;//服务器未知错误  
RestResult.TARGET_NOT_EXIT_ERROR = 6;//目标不存在  

module.exports = RestResult; 