<template>
    <div class="topsearch">
        <div class="tsicon"></div>
        <div class="tstxt"></div>
    </div>
</template>
<style>
    .topsearch{
        position: relative;
        height: 1.8rem;
        padding: 6px 8px 6px 2.4rem;
        background-color: #fe5400;
    }
    .topsearch>.tsicon{
        position: absolute;
        top: 0;
        left: 0;
        height: 1.8rem;
        width: 2.4rem;
        /*background-image: url("data:image/png;base64,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");*/
        background-image: url(../../../static/shop/img/shopicon.png);
        background-repeat: no-repeat;
        background-size: 27px 20px;
        background-position: 40% center;
    }
    .topsearch>.tstxt{
        height: 100%;
        width: 100%;
        background-color: #b52600;
        border-radius:4px
    }
    .topsearch>.tstxt:before{
        content: "寻找宝贝店铺";
        display: block;
        color: #F0E0DC;
        height: 100%;
        width: 100%;
        line-height: 2;
        vertical-align: middle;
        font-size: 13px;
        text-align: center;
    }
</style>
<script>
    export default{

    }
</script>
