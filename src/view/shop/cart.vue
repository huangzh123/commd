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
                <div class="shoppingcar">
                    <div class="mtitle">
                        <span>编辑</span>
                    </div>
                    <div class="mproduct">
                        <div class="mradio">
                            <mcheckbox></mcheckbox>
                        </div>
                        <div>
                            <img class="goodsimg" src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg">
                            <div class="mdetail">
                                <div class="mtitle">永久30变速山地自行车油碟刹26寸男女式铝合金单车R03 2016款</div>
                                <div class="desc">轻径尺寸:26英寸；颜色分类：黑红碟刹；速别：30速度；</div>
                                <div class="mprice">
                                    <span><span>￥</span>1098</span>
                                    <span>￥3398</span>
                                    <span>x1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shoppingcar">
                    <div class="mtitle">
                        <span>编辑</span>
                    </div>
                    <div class="mproduct">
                        <div class="mradio">
                            <mcheckbox></mcheckbox>
                        </div>
                        <div>
                            <img class="goodsimg" src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg">
                            <div class="mdetail">
                                <div class="mtitle">永久30变速山地自行车油碟刹26寸男女式铝合金单车R03 2016款</div>
                                <div class="desc">轻径尺寸:26英寸；颜色分类：黑红碟刹；速别：30速度；</div>
                                <div class="mprice">
                                    <span><span>￥</span>1098</span>
                                    <span>￥3398</span>
                                    <span>x1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    .shoppingcar{
        width: 100%;
        background-color: #fff;
        margin-top: 0.4rem;
        padding-bottom: 0.5rem;

    }
    .shoppingcar:after{
        /*content: "";*/
        /*display: block;*/
        /*width: 100%;*/
        /*height: 1px;*/
        /*bottom: 0;*/
        /*left: 0;*/
        /*background-color: #eaeaea;*/
    }
    .shoppingcar>.mtitle{
        width: 100%;
        height: 1.6rem;
        line-height: 1.8rem;
    }
    .shoppingcar>.mtitle>span{
        float: right;
        font-size: 0.68rem;
        margin-right: 12px;
        color: #919191;
    }
    .shoppingcar>.mproduct{
        position: relative;
        width: 100%;
        background-color: #fafafa;
        padding: 7px 6px 7px 2rem;
    }
    .mproduct>.mradio{
        text-align: center;
        position: absolute;
        height: 100%;
        width: 2rem;
        left: 0;
        top: 0;
        line-height: 6;
        vertical-align: middle;
    }
    .mcheck{
        display: inline-block;
        position: relative;
        height:1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: #2489c5;
        overflow: hidden;
    }
    .mcheck:before,.mcheck:after{
        content: "";
        display: block;
        position: absolute;
        background-color: #fff;
        height: 2px;
    }
    .mcheck:before{
        width: 7px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 11px;
        left: 3px;
    }
    .mcheck:after{
        width: 36px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 1px;
        left: 3px;
    }
    .mproduct>div:nth-child(2){
        position: relative;
    }
    .mdetail{
        font-size: 0.75rem;
        padding-left: 4.8rem;
    }
    .goodsimg{
        position: absolute;
        display: block;
        width: 4rem;
        height: 4rem;
        top: 0;
        left: 0;
    }
    .mtitle{
        font-family: "微软雅黑";
        color: #333;
        height: 1.6rem;
        line-height: 0.75rem;
    }
    .desc{
        color: #919191;
        height: 1.6rem;
        font-size: 12px;
        line-height: 0.8rem;
    }
    .mprice{
        height: 1rem;
    }
    .mprice>span:nth-child(1){
        float: left;
        margin-right: 0.5rem;
        font-size: 0.8rem;
        color: #ff5500;

    }
    .mprice>span:nth-child(1)>span{
        font-size: 0.6rem;
    }
    .mprice>span:nth-child(2){
        float: left;
        text-decoration: line-through;
        color: #8d8d8d;
        font-size: 0.6rem;
        line-height: 1.3rem;
    }
    .mprice>span:nth-child(3){
        float: right;
        line-height: 1.5rem;
        margin-right: 0.5rem;
    }
</style>
<script>
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
                }
            }
        },
        components:{
            bar:require('../../component/bar/bar.vue'),
            mcheckbox:require('../../component/form/mcheckbox.vue')
//            group:require('../../c')
        }
    }
</script>
