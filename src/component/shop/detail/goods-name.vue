<template>
    <!--标题-->
    <div class="product-title">
        {{title}}
        <div class="share-icon">
            <span class="icon icon-share"></span>
        </div>
    </div>
</template>
<style>
    .product-title{
        position: relative;
        height: 2.3rem;
        width: 100%;
        padding: 10px 50px 0 10px;
        background-color: #fff;
        font-size: 0.8rem;
        line-height: 0.98rem;
        font-family: "黑体";
    }
</style>
<script>
    export default{
        props:["title"],
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
