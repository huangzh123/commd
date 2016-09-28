<template>
    <!--轮播图片-->
    <div class="swiper-container" :style="{height:imgHeight+'px'}" data-space-between='10'>
        <div class="swiper-wrapper" >
            <div  class="swiper-slide" v-for="img in imgs" track-by="$index">
                <img :src="img" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<style>
    .swiper-slide>img{
        width: 100%;
    }
    .swiper-container{
        /*height: 280px;*/
        overflow: hidden;
    }
</style>
<script>
    export default{
        props:["imgs","height","autoplay"],
        data(){
            return {
                imgHeight:280
            }
        },
        watch:{
            'imgs': function (val, oldVal) {
                var self=this;
                $.init();
            }
        },
        ready(){
            var self=this;
            self.config={};
            if(self.height){
                self.imgHeight=self.height
            }
            if(self.autoplay){
                self.config.autoplay=self.autoplay;
            }
            //初始化幻灯片
            $(".swiper-container").swiper(self.config);

        },
        components:{}
    }
</script>
