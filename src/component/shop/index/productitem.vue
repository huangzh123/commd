<template>
    <div class="pdi-item">
        <div class="pdi-img">
            <img :src="imgurl">
        </div>
        <div class="pai-txt">
            <div class="txt">{{title}}</div>
            <div class="price">￥{{price}}</div>
        </div>
    </div>
</template>
<style>

    .pdi-item{
        position: relative;
        float: left;
        background-color: #fff;
        width: 50%;
    }
    .pdi-img{
        height: 8.6rem;
    }
    .pdi-img>img{
        height: 100%;
        width: 100%;
    }
    .pai-txt{

    }
    .pai-txt>div.txt{
        font-family: "微软雅黑";
        padding: 0.5rem 0.5rem 0;
        height: 2.5rem;
        line-height: 1.5;
        font-size: 13px;
        /*white-space:nowrap;*/
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
    }
    .pai-txt>div.price{
        font-family: 黑体;
        padding: 0 0.5rem;
        height: 1.6rem;
        font-size: 18px;
        /*line-height: 0.2rem;*/
        color: rgb(255, 80, 0);
        text-align: left;
    }

</style>
<script>
    export default{
        props:["imgurl","title","price"],
        data(){
            return {};
        }
    }
</script>
