<template>
    <template v-for="module of modules">
        <div class="fun_title">{{module.modName}}</div>
        <div class="fun_body">
            <div class="fun_item"
                 v-for="fun in module.funs"
                 v-link="{'name':'list','params':{'appCode':fun.appCode,'funCode':fun.funCode},'query':{'bindFormCode':fun.bindFormCode}}">
                <span>{{fun.funName}}</span>
                <img src="../../static/enginer/img/default_icon.png">
            </div>
            <div class="clearboth"></div>
        </div>
    </template>
</template>
<style>
    .fun_title {
        position: relative;
        height: 2rem;
        line-height: 3.5em;
        width: 100%;
        font-size: 15px;
        font-family: 微软雅黑;
        color: #000000;
        padding-left: .6rem;
        background-color: #fff;
    }
    .fun_body {
        position: relative;
        padding: 0.5rem 0 1rem;
        background-color: #fff;
        /*margin-bottom: .1rem;*/
    }
    .fun_body:before {
        content: "";
        position: absolute;
        display: block;
        height: 1px;
        width: 100%;
        background-color: #eaeaea;
        bottom: 0;
        right: 0;
    }

    .fun_item {
        position: relative;
        float: left;
        height: 4rem;
        width: 25%;
        text-align: center;
    }

    .fun_item > span {
        position: absolute;
        height: 1rem;
        width: 100%;
        font-size: 13px;
        color: #545454;
        text-align: center;
        bottom: .6rem;
        left: 0;
    }

    .fun_item > img {
        display: inline-block;
        height: 2rem;
        width: 2rem;
        margin: .3rem auto 0;
    }



    .clearboth {
        clear: both;
    }
</style>
<script>
    export default{
        props: ["modules"],
    }
</script>
