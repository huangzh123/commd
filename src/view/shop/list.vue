<template>
    <!--菜单栏-->
    <bar :menu="menu"></bar>
    <!--<goods-search></goods-search>-->
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
            <ul>
                <list-item v-for="product of content.products"
                           v-link="{name:'detail',params:{id:product.fid}}"
                    :fid="product.fid"
                    :img-url="product.imgUrl"
                    :title="product.title"
                    :money="product.price"
                    :subtitle="product.subtitle"
                    :description="product.description"
                ></list-item>
            </ul>
        </div>
    </div>

    <!-- About Popup -->
    <div class="popup popup-about">
        <div class="popup">
            <bar :menu="searchmenu"></bar>
            <div class="searchblock">
                <div class="bar">
                    <div class="searchbar">
                        <a class="searchbar-cancel" @click="searchNow(this)">搜索</a>
                        <div class="search-input">
                            <label class="icon icon-search" for="search"></label>
                            <input type="search" v-model="searchvalue" id="search" placeholder="搜索商品..."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--工具栏-->
    <!--<tooler :tools="tools"></tooler>-->

</template>
<style >
    .mt-null{
        margin-top:0 !important;
    }
    .searchblock{
        position: absolute;
        top:2.2rem;
        left: 0;
        width: 100%;
    }
</style>
<script>
    var config = require("../../config")();
    var vueResource = require("vue-resource");
    var Softcan = require("../../sc/softcan");
    export default{
        data(){
            var self=this;
            return{
                menu:{
                    title:'商品列表',
                    leftBtn:{
                        class:"icon-left",
                        method:function(){
                            history.go(-1);
                        }
                    },
                    rightBtn:{
                        class:"icon-search",
                        method:function(){
                            $.popup('.popup');
                            $(".popup-overlay").hide();
                        }
                    }
                },
                searchmenu:{
                    title:'搜索',
                    leftBtn:{
                        class:"icon-left close-popup",
                        method:function(){}
                    },
                    rightBtn:{
                        class:"",
                        method:function(){}
                    }
                },
                content:{
                    products:[]
                },
                searchvalue:""
            }
        },
        route: {
            data:function(transition){
                var self=this;
                self.sf_list = new Softcan(config.appCode,config.funCode.product_list,self);
                self.sf_list.setListModelData(10,1,null,function(err,data){
                    self.content.products=data;
                },"list")
                transition.next();
            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        },
        ready(){
            $(document).on('refresh', '.pull-to-refresh-content',function(e) {
                // 模拟2s的加载过程
                setTimeout(function() {
                    // 加载完毕需要重置
                    $.pullToRefreshDone('.pull-to-refresh-content');
                }, 2000);
            });
            $.init();
        },
        methods:{
            searchNow(self){
                self.sf_list.setListModelData(10,1,self.searchvalue,function(err,data){
                    self.content.products=data;
                },"list")
                $.closeModal(".popup");
            }
        },
        components:{
            bar:require('../../component/bar/bar.vue'),
            tooler:require('../../component/tooler/tooler.vue'),
            goodsSearch:require('../../component/shop/product-list/goods-search.vue'),
            listItem:require('../../component/shop/product-list/list-item.vue')
        }
    }
</script>
