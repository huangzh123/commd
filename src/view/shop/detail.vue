<template>
    <div transition="fade">
        <!--菜单栏-->
        <bar :menu="menu"></bar>
        <!--内容区-->
        <div class="content">
            <!--轮播图片-->
            <swiper :imgs="content.imgs"></swiper>
            <!--标题-->
            <product-title :title="content.title"></product-title>
            <!--价格-->
            <product-price :price="content.price" :old-price="content.oldprice" :salecount-month="content.salecountmonth"></product-price>
            <!--三证-->
            <product-qa></product-qa>
            <!--选择分类-->
            <product-typechose></product-typechose>
            <!--商品详情-->
            <product-taps :detaildescription="content.detaildescription"></product-taps>
        </div>

        <!--工具栏-->
        <buy-btn :buyfun="content.buyfun"></buy-btn>
    </div>
</template>
<style>
    @import '../../component/vux/vux.css';
</style>
<script>
    import css from "./detail.scss";
    var tool =require("../../libs/tool.js")();
    var config = require("../../config")();
    var Softcan = require("../../sc/softcan");
    export default{
        data(){
            return{
                menu:{
                    title:'商品详情',
                    leftBtn:{
                        class:"icon-left",
                        method:function(){
                            history.go(-1);
                        }
                    },
                    rightBtn:{
//                        name:"提交",
                        class:"icon-cart",
                        method:function(){
                            console.log("刷新了");
                        }
                    }
                },
                tools:[],
                content:{
                    buyfun:function(){
                        $.toast("功能完善中");
                    }
                },
                imgUrls:[]
            }
        },
        ready(){
            $.init()

//            var content_el = document.getElementsByClassName("content")[0];
//            content_el.onscroll=function() {
//                var scrollTop =this.scrollTop;
//                var bar_el=document.getElementsByClassName("bar")[0];
//                if(322>=scrollTop && scrollTop>100){
//                    bar_el.style.opacity=(scrollTop/322);
//                }else if(scrollTop<100){
//                    bar_el.style.opacity=0;
//                }
//            };
        },
        route: {
            data:function(transition){
                var self=this;
                var fid=transition.to.params.id;
                var sf_list = new Softcan(config.appCode,config.funCode.product_form,this);
                sf_list.setQueryModelData(fid,function(err,data){
                    renderData(data);
                },"list");
                var renderData = function (rows) {
                    var temp = tool.cloneObj(self.content);
                    temp.title=rows[0].title;
                    temp.price=rows[0].price;
                    temp.oldprice=rows[0].oldprice;
                    temp.salecountmonth=rows[0].salecountmonth;
                    temp.detaildescription=rows[0].detaildescription;
                    if(typeof rows[0].imgs === "string"){
                        temp.imgs=rows[0].imgs.split(",");
                    }
                    self.content=temp;
                    console.log(self.content)
                }
            }
        },
        components:{
            bar:require('../../component/bar/bar.vue'),
            buyBtn:require('../../component/shop/detail/buy-btn.vue'),
            productPrice:require('../../component/shop/detail/goods-price.vue'),
            productQa:require('../../component/shop/detail/qa-item.vue'),
            productTaps:require('../../component/shop/detail/tab.vue'),
            productTitle:require('../../component/shop/detail/goods-name.vue'),
            productTypechose:require('../../component/shop/detail/type-btn.vue'),
            swiper:require('../../component/shop/detail/swiper.vue')
        },
    }
</script>
