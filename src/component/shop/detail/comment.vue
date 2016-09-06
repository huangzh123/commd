<template>
    <!--商品评价-->
    <div class="comments">
        <div class="comments-heads">
            <img src="http://img.woyaogexing.com/2016/08/26/2bfce92b0bb872e0!200x200.jpg">
            <span class="username">名字不好取</span>
            <span class="mdate"><rater :value=5 :max=5 :font-size=15 active-color="#FF9900" :disabled=true ></rater></span>
        </div>
        <div class="comments-body">
            拿到手，手感还不错，应该是真品，大赞！！！拿到手，手感还不错，应该是真品，大赞！！！拿到手，手感还不错，应该是真品，大赞！！！
        </div>
    </div>
    <div class="comments">
        <div class="comments-heads">
            <img src="http://img.woyaogexing.com/2016/08/26/2bfce92b0bb872e0!200x200.jpg">
            <span class="username">名字不好取</span>
            <span class="mdate"><rater :value=4 :max=5 :font-size=15 active-color="#FF9900" :disabled=true ></rater></span>
        </div>
        <div class="comments-body">
            拿到手，手感还不错，应该是真品，大赞！
        </div>
    </div>
    <div class="comments">
        <div class="comments-heads">
            <img src="http://img.woyaogexing.com/2016/08/26/2bfce92b0bb872e0!200x200.jpg">
            <span class="username">名字不好取</span>
            <span class="mdate"><rater :value=1 :max=5 :font-size=15 active-color="#FF9900" :disabled=true ></rater></span>
        </div>
        <div class="comments-body">
            假的！
        </div>
    </div>
</template>
<style>
    @import "../../../theme/theme.scss";
    .comments{
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 8px 6px;
    }
    .comments:after{
        content: "";
        display: block;
        width: 100%;
        position: absolute;
        bottom:0;
        left: 0;
        height: 1px;
        background-color: #eaeaea;
    }
    .comments-heads{
        position: relative;
        height: 2.2rem;
        line-height: 2.2rem;
        width: 100%;
        padding-left: 2.6rem;
    }
    .comments-heads>img{
        display: block;
        position: absolute;
        top: 0.3rem;
        left: 0.6rem;
        height: 1.6rem;
        width: 1.6rem;
        border-radius: 50%;
    }
    .comments-heads>span.username{
        font-size: 0.68rem;
        font-family: "黑体";
        font-weight: 600;
        color: #444;
    }
    .comments-heads>span.mdate{
        font-size: 12px;
        color: #717171;
        float: right;
        margin-right: 4px;
    }
    .comments-body{
        width: 100%;
        font-size: 0.68rem;
        text-indent: 17px;
        padding: 4px 5px;
        color: #333;
        font-family: "微软雅黑";
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            group:require("../../vux/components/group"),
            rater:require("../../vux/components/rater"),
        }
    }
</script>
