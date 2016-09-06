<template>
    <li>
        <a @click="getDetail"  class="item-link item-content">
            <div class="item-media"><img :src="imgUrl" style='width: 4rem;'></div>
            <div class="item-inner">
                <div class="item-title-row">
                    <div class="item-title">{{title}}</div>
                    <div class="item-after">{{money}}</div>
                </div>
                <div class="item-subtitle">{{subtitle}}</div>
                <div class="item-text">{{description}}</div>
            </div>
        </a>
    </li>
</template>
<script>
    export default{
        props:["fid","imgUrl","method","title","money","subtitle","description"],
        data(){
            var self=this;
            return{
                getDetail(){
                    console.log(self.fid);
                }
            }
        }
    }
</script>
