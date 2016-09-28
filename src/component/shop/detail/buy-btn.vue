<template>
    <div class="product-buy" style="right:50%;background-color:#000"><span class="icon icon-cart"></span>加入购物车</div>
    <div class="product-buy" @click="buyfun">
        <!--<span class="icon icon-cart"></span>-->
        立即购买
    </div>
</template>
<style lang="sass">
 @import "../../../theme/theme.scss";
.product-buy{
    position: absolute;
    right: 0;
    bottom: 0;
    text-align: center;
    height: 40px;
    line-height: 40px;
    width: 50%;
    font-size: 0.8rem;
    font-family: "微软雅黑";
    color: #fafafa;
    background-color: $color;
    z-index: 1000
}
    .product-buy>span{
        font-size: 1.2rem;
        vertical-align: baseline;
        margin-right: 8px;
    }
</style>
<script>
    export default{
        props:["buyfun","addCartfun"],
        data(){
            return{
            }
        },
        methods:{

        }
    }
</script>