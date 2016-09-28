<template>
    <!--菜单栏-->
    <bar :menu="menu"></bar>
    <!--内容区-->

    <!-- content应该拥有"pull-to-refresh-content"类,表示启用下拉刷新 -->
    <div class="content pull-to-refresh-content" data-ptr-distance="55">
        <!-- 默认的下拉刷新层 -->
        <div class="pull-to-refresh-layer">
            <div class="preloader"></div>
            <div class="pull-to-refresh-arrow"></div>
        </div>
        <!-- 下面是正文 -->
        <div class="list-block media-list mt-null">
            <ul class="bc-transparent">
                <cart-item v-for="cart of content.carts"
                           :fid="cart.id"
                           :img-url="cart.imgurl"
                           :title="cart.title"
                           :price="cart.price"
                           :oldprice="cart.oldprice"
                           :description="cart.description"
                           :counts="cart.count"

                >

                </cart-item>
            </ul>
        </div>
    </div>
</template>
<style>
    .mt-null{
        margin-top:0 !important;
    }
    .bc-transparent{
        background-color: transparent !important;
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
                    title:'购物车',
                    leftBtn:{
                        class:"icon-left",
                        method:function(){
                            history.go(-1);
                        }
                    },
                    rightBtn:{
//                        name:"提交",
                        class:"icon-refresh",
                        method:function(){
                            console.log("刷新了")
                        }
                    }
                },
                content:{
                    carts:[
                    ]
                }
            }
        },
        route: {
            data:function(transition){
                var self=this;
                var sf_list = new Softcan(config.appCode,config.funCode.cart_list,this);
                sf_list.setListModelData(10,1,null,function(err,data){
                    renderData(data)
                },"list")
                var renderData = function (rows) {
                    console.log(rows)
                    self.content.carts=rows
                }
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
            mcheckbox:require('../../component/form/mcheckbox.vue'),
            cartItem:require("../../component/shop/cart-item.vue")
//            group:require('../../c')
        }
    }
</script>
