<template>
    <div class="topnotice">
        <div class="tntxt"><div class="tntxt-icon">秒杀</div>就是爱卫衣，这节奏不要停！</div>
    </div>
</template>
<style>
    .topnotice{
        position: relative;
        height: 1.8rem;
        padding-left: 4.2rem;
        background-color: #fff;
        background-image: url("http://gw.alicdn.com/tps/i3/TB12wM3HXXXXXbxapXXdFmWHFXX-207-60.png?imgtag=avatar");
        background-repeat: no-repeat;
        background-size: auto 58%;
        background-position:2% center;
        margin-bottom: 0.4rem;
    }
    .topnotice:before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #eaeaea;
    }
    .topnotice>.tntxt{
        position: relative;
        height: 100%;
        width: 100%;
        color: rgb(103, 102, 102);
        font-size: 15px;
        vertical-align: middle;
        line-height: 1.8rem;
        text-align: center;
    }
    .topnotice>.tntxt:before{
        content: "";
        display: block;
        position: absolute;
        height: 80%;
        width: 1px;
        background-color: #eaeaea;
        left: 0;
        top: 10%;
    }
    .tntxt-icon{
        display: inline-block;
        border: 1px solid orange;
        color: orange;
        font-size: 15px;
        height: 1rem;
        line-height: 1rem;
        border-radius: 5px;
        padding:0 0.2rem;
        margin: 0 0.2rem;

    }
</style>
<script>

    export default{

    }
</script>

