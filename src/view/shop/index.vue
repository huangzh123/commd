<template>

        <!--菜单栏-->
        <!--<bar :menu="menu"></bar>-->
        <!--工具栏-->
        <!--<tooler :tools="tools"></tooler>-->
        <!--内容区-->
        <div class="content native-scroll">
            <div class="content-inner">
                <!--<hr>-->
                <!--<a v-link="{ path: '/shop/list' }">商品列表</a>-->
                <!--<hr>-->
                <!--<a v-link="{ path: '/shop/getOrderList' }">我的订单</a>-->
                <!--<hr>-->
                <!--<a v-link="{ path: '/shop/cart' }">购物车</a>-->
                <!--<hr>-->
                <!--搜索框-->
                <topsearch></topsearch>
                <!--顶部轮播广告-->
                <swiper :imgs="content.topImgs" :height='117' :autoplay='2500'></swiper>
                <!--快捷入口-->
                <entrance></entrance>
                <!--轮播公告/头条-->
                <topnotice></topnotice>
                <!--方格子广告-->
                <squaread></squaread>
                <!--分割线/标题-->
                <septitle></septitle>
                <!--商品展示-->
                <div class="productitem">
                    <productitem
                            v-for="hotsale of content.hotsales"
                            v-link="{name:'detail',params:{id:hotsale.fid}}"
                            :imgurl="hotsale.imgurl"
                            :price="hotsale.price"
                            :title="hotsale.description"
                    ></productitem>
                    <div style="clear:both"></div>
                </div>
            </div>
        </div>
</template>
<style type="sass">
    @import "../../component/vux/vux.css"
    .productitem{
        position: relative;
        width: 100%;
        /*background-color: #fff;*/
    }
    .productitem>.pdi-item:nth-child(odd):after{
        content: "";
        position: absolute;
        height: 100%;
        width: 1px;
        right: 0;
        top: 0;
        background-color: #eaeaea;
    }
</style>
<script>
    var config = require("../../config")();
    var vueResource = require("vue-resource");
    var Softcan = require("../../sc/softcan");
    export default{
        data(){
            return{
                menu:{
                    title:'商场示例',
                    leftBtn:{
                        class:"icon-me",
                        method:function(){
                            console.log("选择了“我”")
                        }
                    },
                    rightBtn:{
//                        name:"提交",
                        class:"icon-search",
                        method:function(){
                            console.log("选择了“搜索”")
                        }
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
                    topImgs:[
                        "//gw.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg_q50.jpg",
                        "//img.alicdn.com/tps/TB11NqbNpXXXXXPXVXXXXXXXXXX-1125-352.jpg_q50.jpg",
                        "//img.alicdn.com/tps/TB1WXh3NpXXXXajaXXXXXXXXXXX-1125-352.jpg_q50.jpg",
                        "//img.alicdn.com/imgextra/i2/2943025980/TB2SxbnaVHzQeBjSZFpXXXm1XXa_!!2943025980.jpg_q50.jpg"
                    ],
                    hotsales:[]
                }
            }
        },
        route: {
            data:function(transition){
                var self=this;
                var sf_list = new Softcan(config.appCode,config.funCode.hotsale_list,this);
                sf_list.setListModelData(10,1,null,function(err,data){
                    self.content.hotsales=data;
                    console.log(self.content)
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
            swiper:require('../../component/shop/detail/swiper.vue'),
            entrance:require('../../component/shop/index/entrance.vue'),
            topsearch:require('../../component/shop/index/topsearch.vue'),
            topnotice:require('../../component/shop/index/topnotice.vue'),
            squaread:require('../../component/shop/index/squaread.vue'),
            septitle:require('../../component/shop/index/septitle.vue'),
            productitem:require('../../component/shop/index/productitem.vue'),
        },
        ready(){
            $.init();
        }
    }
</script>
