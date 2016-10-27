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
    this.table={    //表格对象
        keys:[],    //属性的key
        thead:[],   //属性字段
        tbody:[]    //属性值
    };
    this.source={
        modules:null,//功能模块
        attr:null,//模型
        rows:null,  //数据
        events:null//功能列表
    };//源数据
}

/**
 * 请求获取功能模块列表
 * @param callback
 */
Softcan.prototype.getApplist = function(callback){
    var self=this;
    if(!self.app_code) return callback("app_code is No found!");
    self.vue.$http.get(config.requrl.funlist+"?_app="+self.app_code).then(function(success){
        var response=success.response;
        if(typeof response === "string") response=JSON.parse(response);
        self.modules=response.modules;
        callback(null,response.modules);
    },function(error){
        callback(error);
    })
}

/**
 * 请求服务获取模型
 * @param callback 回调函数
 */
Softcan.prototype.requestModel = function (callback) {
    var self = this;
    if(!self.app_code || !self.fun_code) return callback("app_code or fun_code is No found!");
    function success(response){
        self.primaryKey = response.fun.primaryKey;
        self.queryCode = response.fun._queryCode;
        self.table.thead=response.attrs;
        self.table.keys=[];//置空数组key
        for(var i=0;i<response.attrs.length;i++){
            self.table.keys.push(response.attrs[i].key)
        }
        self.source.attr=response;
        self.source.events=response.events;
        for(var i=0;i<response.events.length;i++){
            if(response.events[i].eventName=="查询"){
                self.queryEvent=response.events[i].key;
            }
        }
        self.queryKeys=response.query;
        callback(null,response);
    }
    function requestServer(){
        self.vue.$http.get(config.requrl.funget+"?_app="+self.app_code+"&_code="+self.fun_code).then(function(data){
            var response=data.response;
            if(typeof response === "string") response=JSON.parse(response);
            if(response.success!==undefined && !response.success) return callback(response.message.error);
            localStorage.setItem(self.app_code+"_"+self.fun_code,JSON.stringify(response));
            success(response);
        },callback);
    }
    var str=localStorage.getItem(self.app_code+"_"+self.fun_code);
    if(str){
        try{
            str=JSON.parse(str);
            success(str);
        }catch (err){
            localStorage.removeItem(self.app_code+"_"+self.fun_code);
            requestServer();
        }
    }else{
        requestServer();
    }

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
    if(!self.app_code || !self.fun_code) return callback("app_code or fun_code is No found!");
    var url=config.requrl.dataget+"?_app="+self.app_code+"&_code="+self.fun_code;
    //url+="&rows="+pageSize+"&page="+currentPage;
    //if(query && query!="" && self.queryKeys.length>0){
    //    url+="&"+self.queryKeys[0].key+"="+query+"&_queryCode="+self.queryCode+"&_event="+self.queryEvent;
    //}
    var param={
        rows:pageSize,
        page:currentPage
    };
    if(query && query!=""){
        for(var key in query){
            param[key]=query[key];
        }
        param["_queryCode"]=self.queryCode;
        param["_event"]=self.queryEvent;
    }
    self.vue.$http.post(url,param).then(function(success){
        var response=success.response;
        if(typeof response === "string") response=JSON.parse(response);
        self.source.data=response.rows;
        callback(null,response.rows);
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
    if(!self.app_code || !self.fun_code) return callback("app_code or fun_code is No found!");
    self.vue.$http.get(config.requrl.formDataget+"?_app="+self.app_code+"&_code="+self.fun_code+"&"+self.primaryKey+"="+primaryValue).then(function(success){
        var response=success.response;
        if(typeof response === "string") response=JSON.parse(response);
        self.source.data=[response];
        callback(null,[response]);
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
    for(var i=0;i<attrs.length;i++){
        models[attrs[i].key]=attrs[i].name;
    }
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
                value:keyOfValues[fid],
            };
            attrs.push(newAttr);
        }
    };
    return attrs;
};

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
        self.models = exchangeModel(self.source.attrs);
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


//表格填充
/**
 * 生成表格数据
 * @param pageSize
 * @param currentPage
 * @param query
 * @param callback
 * @returns {*}
 */
Softcan.prototype.generateTable = function (pageSize,currentPage,query,callback) {
    var self = this;
    if(self.table.keys.length == 0){
        self.requestModel(setTableData);
    }else  {
        setTableData();
    }
    //设置绑定表格时需要的数据格式
    function setTableData(err){
        if(err) return callback(err);
        self.requestModelData(pageSize,currentPage,query,function(error){
            if(error) return callback(error);
            var keys=self.table.keys;//模型key
            var datas=self.source.data;//模型数据
            var result=[];
            for(var i=0;i<datas.length;i++){
                var newDatas=tool.changObjToSortarray(keys,datas[i]);
                var index=tool.indexOf(keys,self.primaryKey);
                result.push({
                    arr:newDatas,
                    primaryKey:self.primaryKey,
                    primarykeyValue:newDatas[index]
                });
            }
            self.table.tbody=result;
            callback(null,{
                thead:self.table.thead,
                tbody:result
            });
            //callback(null,self.table)
        })
    }
}

/**
 * 获取表单数据
 * @param primaryValue
 * @param callback
 */
Softcan.prototype.getForm = function(primaryValue,callback){
    var self = this;
    if(arguments.length=1 && typeof primaryValue === "function") callback=primaryValue;
    self.requestModel(function(err,arr){
        if(err) return callback(err);
        var models = arr.attrs;
        if(arguments.length=1 && typeof primaryValue === "function"){
            setValue(models);
        }else{
            self.requestQueryData(primaryValue, function (error,datas) {
                if(error) return callback(error);
                setValue(models,datas[0]);
            })
        }
    });
    function setValue(models,data){
        for(var i =0 ;i<models.length;i++){
            var value="";
            if(data!=undefined && data[models[i].key]!=undefined) value=data[models[i].key];
            models[i].value=value;
        };
        if(callback) callback(null,models);
    }
}

/**
 * 保存数据
 * @param param
 * @param callback
 */
Softcan.prototype.saveData = function(param,callback){
    var self =this;
    self.vue.$http.post(config.requrl.datasave+"?_app="+self.app_code+"&_code="+self.fun_code,param).then(
        function(success){
            var response=success.response;
            if(typeof response === "string") response=JSON.parse(response);
            callback(null,response);
        },function(error){
            callback(error);
        });
};

/**
 * 删除数据
 * @param primarykeyArr
 * @param callback
 */
Softcan.prototype.deleteData = function (primarykeyArr,callback) {
    var self =this;
    var paramurl="";
    for(var i=0;i<primarykeyArr.length;i++) {
        for(var key in primarykeyArr[i]){
            paramurl+="&"+key+"="+primarykeyArr[i][key];
        }
    }
    self.vue.$http.post(config.requrl.datadelete+"?_app="+self.app_code+"&_code="+self.fun_code+paramurl).then(
        function(success){
            var response=success.response;
            if(typeof response === "string") response=JSON.parse(response);
            callback(null,response);
        },function(error){
            callback(error);
        });
};



module.exports = Softcan;