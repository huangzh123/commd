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
            <!--<input type="text" class="tab-color">-->
            <tab >
                <tab-item :selected="demo1 === '已发货'" @click="demo1 = '已发货'">已发货</tab-item>
                <tab-item :selected="demo1 === '未发货'" @click="demo1 = '未发货'">未发货</tab-item>
                <tab-item :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">全部订单</tab-item>
            </tab>
            <ul>
                <list-item v-for="order of content.orders"
                           :fid="order.fid"
                           :img-url="order.pimgurl"
                           :title="order.ptitle"
                           :money="order.pprice"
                           :subtitle="order.psubtitle"
                           :description="order.pdescription"
                ></list-item>
            </ul>


        </div>
    </div>


</template>
<style lang="sass">
    @import "../../component/vux/vux.css";
    @import "../../theme/theme.scss";
    .mt-null{
        margin: 0;
    }
    .tab-color{
        color:$color !important;
    }
</style>
<script>
    var Softcan = require("../../sc/softcan");
    var config = require("../../config")();
    var vueResource = require("vue-resource");
    export default{
        data(){
            return{
                menu:{
                    title:'我的订单',
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
                    orders:[
//                        {
//                            fid:"fid1",
//                            imgUrl:"http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg",
//                            title:"iphone 6s",
//                            money:"￥5988",
//                            subtitle:"玫瑰金 16G",
//                            description:"年终大促,苹果手机直降500元，下单还送精美礼品！"
//                        },
//                        {
//                            fid:"fid2",
//                            imgUrl:"http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg",
//                            title:"iphone 6s",
//                            money:"￥7988",
//                            subtitle:"玫瑰金 68G",
//                            description:"年终大促,苹果手机直降500元，下单还送精美礼品！"
//                        },
//                        {
//                            fid:"fid3",
//                            imgUrl:"http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg",
//                            title:"iphone 6s plus",
//                            money:"￥7888",
//                            subtitle:"玫瑰金 16G",
//                            description:"年终大促,苹果手机直降500元，下单还送精美礼品！"
//                        }
                    ]
                },
                demo1:"已发货",
                activeColor:"red"
            }
        },
        route: {
            data:function(transition){
                var self=this;
                var sf_list = new Softcan(config.appCode,config.funCode.order_list,this);
                sf_list.setListModelData(10,1,null,function(err,data){
                    renderData(data)
                },"list")
                var renderData = function (rows) {
                    console.log(rows)
                    self.content.orders=rows
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
//        ready(){
//            var self=this;
////            var color=document.defaultView.getComputedStyle(document.getElementsByClassName("tab-color")[0],null).color;
////            this.activeColor=color;
//            // 添加'refresh'监听器
//            $(document).on('refresh', '.pull-to-refresh-content',function(e) {
//                // 模拟2s的加载过程
//                setTimeout(function() {
//                    console.log("刷新完成");
//                    // 加载完毕需要重置
//                    $.pullToRefreshDone('.pull-to-refresh-content');
//                }, 2000);
//            });
//            // 加载flag
//            var loading = false;
//            // 最多可加载的条目
//            var maxItems = 100;
//            // 每次加载添加多少条目
//            var itemsPerLoad = 20;
//
//            function addItems(number, lastIndex) {
//                // 生成新条目的HTML
//                var html = '';
//                for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
//                    html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
//                }
//                // 添加新条目
//                $('.infinite-scroll-bottom .list-container').append(html);
//
//            }
//            //预先加载20条
//            addItems(itemsPerLoad, 0);
//            // 上次加载的序号
//            var lastIndex = 20;
//            // 注册'infinite'事件处理函数
//            $(document).on('infinite', '.infinite-scroll-bottom',function() {
//                // 如果正在加载，则退出
//                if (loading) return;
//                // 设置flag
//                loading = true;
//                // 模拟1s的加载过程
//                setTimeout(function() {
//                    // 重置加载flag
//                    loading = false;
//                    if (lastIndex >= maxItems) {
//                        // 加载完毕，则注销无限加载事件，以防不必要的加载
//                        $.detachInfiniteScroll($('.infinite-scroll'));
//                        // 删除加载提示符
//                        $('.infinite-scroll-preloader').remove();
//                        return;
//                    }
//                    // 添加新条目
//                    addItems(itemsPerLoad, lastIndex);
//                    // 更新最后加载的序号
//                    lastIndex = $('.list-container li').length;
//                    //容器发生改变,如果是js滚动，需要刷新滚动
//                    $.refreshScroller();
//                }, 1000);
//            });
//            $.init();
//        },
        components:{
            bar:require('../../component/bar/bar.vue'),
            tooler:require('../../component/tooler/tooler.vue'),
            listItem:require( '../../component/shop/product-list/list-item.vue'),
            tab:require('../../component/vux/components/tab'),
            tabItem:require('../../component/vux/components/tab-item')
        }
    }
</script>
