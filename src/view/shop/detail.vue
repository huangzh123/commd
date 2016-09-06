<template>
    <div transition="fade">
        <!--菜单栏-->
        <bar :menu="menu"></bar>
        <!--内容区-->
        <div class="content">
            <!--轮播图片-->
            <swiper></swiper>
            <!--标题-->
            <product-title></product-title>
            <!--价格-->
            <product-price></product-price>
            <!--三证-->
            <product-qa></product-qa>
            <!--选择分类-->
            <product-typechose></product-typechose>
            <!--商品详情-->
            <product-taps></product-taps>
        </div>

        <!--工具栏-->
        <buy-btn></buy-btn>
    </div>
</template>
<style>
    @import '../../component/vux/vux.css';
</style>
<script>
    import css from "./detail.scss";
    var tool =require("../../libs/tool.js")();
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
                content:{}
            }
        },
        ready(){
            $.init();
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
        components:{
            bar:require('../../component/bar/bar.vue'),
            buyBtn:require('../../component/shop/detail/buy-btn.vue'),
            productPrice:require('../../component/shop/detail/goods-price.vue'),
            productQa:require('../../component/shop/detail/qa-item.vue'),
            productTaps:require('../../component/shop/detail/tab.vue'),
//            tab:require('../../component/vux/components/tab'),
//            tabItem:require('../../component/vux/components/tab-item'),
            productTitle:require('../../component/shop/detail/goods-name.vue'),
            productTypechose:require('../../component/shop/detail/type-btn.vue'),
            swiper:require('../../component/shop/detail/swiper.vue')
        }
    }
</script>
