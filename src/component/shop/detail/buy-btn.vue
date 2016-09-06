<template>
    <div class="product-buy"><span class="icon icon-cart"></span>立即购买</div>
</template>
<style lang="sass">
 @import "../../../theme/theme.scss";
.product-buy{
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    height: 40px;
    line-height: 40px;
    width: 100%;
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
        data(){
            return{}
        }
    }
</script>