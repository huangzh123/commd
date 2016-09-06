<template>
    <!--商品详情-->
    <div class="buttons-tab" style="margin-top:5px">
        <a href="#tab1" class="tab-link active button">商品详情</a>
        <a href="#tab2" class="tab-link button">评价(25)</a>
    </div>
    <div class="content-block">

        <div class="tabs">
            <div id="tab1" class="tab active">
                <div class="content-block">
                    <img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt="">
                    <img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt="">
                    <img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt="">
                </div>
            </div>
            <div id="tab2" class="tab">
                <div class="content-block">
                    <comment></comment>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
    @import "../../../theme/theme.scss";
    .tabs>.tab.active {
        min-height: 100px;
        width: 100%;
    }
    .content-block {
        padding: 0;
        margin: 0;
        margin-bottom: 35px;
        background-color: #fff;
        overflow: hidden;
    }
    .tab.active>.content-block>img{
        width: 100%;
    }
    .buttons-tab .button.active{
        color: $color;
        border-color: $color;
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
            "comment":require("./comment.vue"),
        }
    }
</script>
