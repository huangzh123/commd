<template>
    <!--三证-->
    <div class="product-QA" style="margin:1px 0 5px;">
        <!--<div class="mtitle">天猫国际</div>-->
        <div class="mitem">
            <div class="mtick"></div>
            <span>正品保障</span>
            <span>100%海外正品,假一陪五</span>
        </div>
        <div class="mitem">

            <div class="mtick"></div>
            <span>七天放心退</span>
            <span>七天无理由国内退货</span>
        </div>
    </div>
</template>
<style lang="sass">
    @import "../../../theme/theme.scss";
    .product-QA{
        background-color: #fff;
        padding:5px 10px 5px;
    }
    .product-QA>div{
        width: 100%;

    }
    .product-QA>div.mtitle{
        font-size: 0.8rem;
        color: $color;
        font-weight: 600;
        font-family: 微软雅黑;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .product-QA>div.mitem{
        position: relative;
        font-size: 12px;
        color:#777777;
        height: 1rem;
        line-height: 1rem;
        padding-left: 1.1rem;
    }
    .product-QA>div.mitem>span:nth-child(2){
        margin-right: 15px;
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

        }
    }
</script>
