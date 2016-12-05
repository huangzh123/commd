<template>
        <!--菜单栏-->
        <bar :menu="menu"></bar>
        <!--工具栏-->
        <!--<tooler :tools="tools"></tooler>-->
        <!--内容区-->
        <div class="content">
            <app-module :modules="content.modules"></app-module>
        </div>


</template>
<style >
    @import "../../component/vux/vux.css";
</style>
<script>
    var config = require("../../config")();
    var vueResource = require("vue-resource");
    var Softcan = require("../../sc/softcan");
    var Tool = require("../../libs/tool")();
    export default{
        data(){
            return{
                menu:{
                title:'工程示例',
                leftBtn:{
                    class:"icon-me",
                    method:function(){}
                },
                rightBtn:{
                    class:"icon-search",
                    method:function(){}
                }
                },
                tools:[
                    {
                        icon:"icon-home",
                        name:"首页",
                        active:true
                    },{
                        icon:"icon-cart",
                        name:"购物车",
                        href:"/shop/cart"
                    },{
                        icon:"icon-me",
                        name:"我的订单",
                        href:"/shop/getOrderList"
                    }
                ],
                content:{
                    modules:[]
                }
            }
        },
        route: {
            data:function(transition){
                var self=this;
                var appCode=Tool.getRequestparam()["appCode"];
                if(!appCode) appCode=config.appCode;
                var sf_list = new Softcan(appCode,null,self);
                sf_list.getApplist(function(err,data){
                    self.content.modules=data;
                },"list");
                transition.next();
            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        },
        components:{
            bar:require('../../component/bar/bar.vue'),
            tooler:require('../../component/tooler/tooler.vue'),
            appModule:require("../../component/enginer/appModule.vue"),
        },
        ready(){

        }
    }
</script>
