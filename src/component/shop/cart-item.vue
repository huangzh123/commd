<template>
    <div class="shoppingcar">
        <div class="mtitle">
            <span @click="editcart()">编辑</span>
        </div>
        <div class="mproduct">
            <div class="mradio">
                <mcheckbox></mcheckbox>
            </div>
            <div>
                <img class="goodsimg" :src="imgUrl">
                <div class="mdetail">
                    <div class="mtitle">{{title}}</div>
                    <div class="desc">{{description}}</div>
                    <div class="mprice">
                        <span><span>￥</span>{{price}}</span>
                        <span>￥{{oldprice}}</span>
                        <span>x{{counts}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
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
        /*background-color: #2489c5;*/
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
        position: relative;
        font-size: 0.75rem;
        padding-left: 4.8rem;
    }
    .goodsimg{
        position: absolute;
        display: block;
        width: 4.2rem;
        height: 4.2rem;
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
        props:["fid","imgUrl","title","price","oldprice","description","counts"],
        components:{
            mcheckbox:require('../form/mcheckbox.vue')
        },
        methods:{
            editcart(){

            }
        }
    }
</script>
