/**
 * Created by Administrator on 2016/9/1.
 */

"use strict";


function  Config(){
    //服务端总IP
    this.serverIP="http://172.22.12.167:8088";
    this.debug=false;
    this.requrl={
        "applist":this.serverIP+"/rest/engine/model/app/list", //获取应用列表
        "login":this.serverIP+"/rest/login/appLoginCheck", //单点登录接口
        "funlist":this.serverIP+"/rest/engine/model/fun/list", //获取应用功能列表
        "funget":this.serverIP+"/rest/engine/model/fun/get", //获取应用模型
        "dataget":this.serverIP+"/rest/engine/event/query", //获取模型数据
        "datasave":this.serverIP+"/rest/engine/event/save", //保存模型数据
        "datadelete":this.serverIP+"/rest/engine/event/delete", //删除模型数据
        "imgGet":this.serverIP+"/rest/engine/event/img", //获取图片
        "imgUpload":this.serverIP+"/rest/engine/event/upload", //上传图片
        "formDataget":this.serverIP+"/rest/engine/event/entity" //获取表单数据
    }
}

module.exports=function(){
    return new Config();
}