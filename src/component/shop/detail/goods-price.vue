<template>
    <!--价格-->
    <div class="product-price">
        <span class="price"><span class="zh-icon">￥</span>{{price}}</span>
        <span class="sourcePrice">原价 ￥{{oldPrice}}</span>
        <span class="monthSale">月销 {{salecountMonth}}笔</span>
    </div>
</template>
<style>
    .product-price{
        height: 34px;
        padding: 0 8px;
        background-color: #fff;
    }
    .product-price>span.price{
        font-size: 1rem;
        /*font-weight: 600;*/
        color: #e00000;
        line-height: 34px;
        /*font-family: "黑体";*/
    }
    .product-price>span.sourcePrice{
        font-size: 0.6rem;
        color: #777777;
        text-decoration: line-through;
        margin-left: 4px;
    }
    .product-price>span.monthSale{
        float: right;
        font-size: 0.6rem;
        color: #777777;
        margin-top: 10px;
        margin-right: 5px;
    }
    .zh-icon{
        font-size: 0.68rem;
        font-weight: 600;
        margin: 0 1px 0 5px;
        font-family: "黑体";
    }
    .share-icon{
        position: absolute;
        height: 42px;
        width: 50px;
        right: 0;
        top: 3px;
        color: #777777;
        text-align: center;
        font-size: 0.9rem;
        line-height: 25px;
    }
    .share-icon:before{
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 8px;
        height: 24px;
        width: 1px;
        background-color: #e7e7e7;
    }
    .share-icon:after{
        content: "\5206\4EAB";
        display: block;
        font-size: 12px;
        line-height: 13px;
    }
</style>
<script>
    export default{
        props:["price","oldPrice","salecountMonth"]
    }
</script>
