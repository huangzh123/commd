/**
 * Created by Administrator on 2016/9/9.
 */
"use strict";

var tool =require("../libs/tool")();
var config = require("../config")();

/**
 * 软件平台数据解析类
 * @param app_code 应用编码
 * @param fun_code 功能编码
 * @param vue 全局vue
 * @constructor
 */
function Softcan(app_code,fun_code,vue){
    this.app_code=app_code;
    this.fun_code=fun_code;
    this.vue=vue;
    this.source={
        models:null,//模型
        rows:null  //数据
    };//源数据
}

/**
 * 请求服务获取模型
 * @param callback 回调函数
 */
Softcan.prototype.requestModel = function (callback) {
    var self = this;
    self.vue.$http.get(config.requrl.funget+"?_app="+self.app_code+"&_code="+self.fun_code).then(function(success){
        var response=success.response;
        if(typeof response === "string") response=JSON.parse(response);
        self.primaryKey = response.fun.primaryKey;
        self.queryCode = response.fun._queryCode;
        self.source.models=response;
        for(var i=0;i<response.events.length;i++){
            if(response.events[i].eventName=="查询"){
                self.queryEvent=response.events[i].key;
            }
        }
        self.queryKeys=response.query;
        callback(null);
    },function(error){
        callback(error);
    })
};

/**
 * 请求服务获取模型数据(列表)
 * @param pageSize    页数
 * @param currentPage 当前页
 * @param query       查询参数
 * @param callback    回调
 */
Softcan.prototype.requestModelData = function (pageSize,currentPage,query,callback) {
    var self = this;
    //参数 arguments
    var param={};
    if(query && query!="" && self.queryKeys.length>0){
        param={
            rows:pageSize,
            page:currentPage
        };
        //param = tool.extend(param, query);
        param[self.queryKeys[0].key]=query;
        param["_queryCode"]=self.queryCode;
        param["_event"]=self.queryEvent;
    }
    self.vue.$http.post(config.requrl.dataget+"?_app="+self.app_code+"&_code="+self.fun_code,param).then(function(success){
        var response=success.response;
        if(typeof response === "string") response=JSON.parse(response);
        self.source.data=response.rows;
        callback(null);
    },function(error){
        callback(error);
    })
}

/**
 * 请求服务获取表单数据
 * @param primaryValue
 * @param callback
 */
Softcan.prototype.requestQueryData = function(primaryValue,callback){
    var self = this;
    self.vue.$http.get(config.requrl.formDataget+"?_app="+self.app_code+"&_code="+self.fun_code+"&"+self.primaryKey+"="+primaryValue).then(function(success){
        var response=success.response;
        if(typeof response === "string") response=JSON.parse(response);
        self.source.data=[response];
        callback(null);
    },function(error){
        callback(error);
    })
}

/**
 * 转换模型
 * （将数组对象转换成key-value对象）
 * @param attrs 数据模型的源数据
 * @returns {Object}
 */
var exchangeModel = function (attrs) {
    var models= new Object();
    for(var i=0;i<attrs.length;i++) models[attrs[i].key]=attrs[i].name;
    return models;
};

/**
 * 设置模型数据
 * @param keyOfValues 模型数据 （object）
 * @param keyOfAttrs 模型 （object）
 * @returns {Array}
 */
Softcan.prototype.bindModelData = function (keyOfValues,keyOfAttrs) {
    var attrs=[];
    if(typeof keyOfValues==="object"  &&  keyOfValues.length){
        for(var i=0;i<keyOfValues.length;i++){
            var obj=new Object();
            for(var key in keyOfValues[i]){
                if(!keyOfAttrs[key]) continue;
                obj[keyOfAttrs[key]]=keyOfValues[i][key];
            }
            attrs.push(obj)
        }
    }else{
        for(var fid in keyOfValues){
            if(!keyOfAttrs[fid]) continue;
            var newAttr={
                id:fid,
                name:keyOfAttrs[fid],
                value:keyOfValues[fid]
            };
            attrs.push(newAttr);
        }
    };
    return attrs;
}

/**
 * 获取模型
 * @param callback
 * @returns {*}
 */
Softcan.prototype.getModel = function (callback) {
    var self = this;
    if(self.models) return callback(null,self.models);
    self.requestModel(function(error){
        if(error) return callback("获取模型出错了！");
        self.models = exchangeModel(self.source.models.attrs);
        callback(null,self.models);
    })
}

/**
 * 获取并绑定列表模型数据
 * @param pageSize
 * @param currentPage
 * @param query
 * @param callback
 * @param type
 * @returns {*}
 */
Softcan.prototype.setListModelData = function (pageSize,currentPage,query,callback,type) {
    var self = this;
    self.getModel(function(){
        if(!self.models) return callback("请先获取模型");
        self.requestModelData(pageSize,currentPage,query,function(error){
            if(error) return callback("获取数据出错了！");
            var keyOfValue = self.source.data;
            if(type=="form") keyOfValue = (keyOfValue!=undefined && keyOfValue.length)?keyOfValue[0]:{};
            self.rows = self.bindModelData(keyOfValue,self.models);
            callback(null,self.rows);
        });
    })
}

/**
 * 获取详情
 * @param primaryValue
 * @param callback
 * @param type
 */
Softcan.prototype.setQueryModelData = function (primaryValue,callback,type) {
    var self = this;
    self.getModel(function(){
        if(!self.models) return callback("请先获取模型");
        self.requestQueryData(primaryValue,function(error){
            if(error) return callback("获取数据出错了！");
            var keyOfValue = self.source.data;
            if(type=="form") keyOfValue = (keyOfValue!=undefined && keyOfValue.length)?keyOfValue[0]:{};
            self.rows = self.bindModelData(keyOfValue,self.models);
            callback(null,self.rows);
        });
    })
}



module.exports = Softcan;