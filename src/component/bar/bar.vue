<template>
    <header class="bar bar-nav">


            <menu-btn
                :bname="leftBtn.name"
                :bclass="leftBtn.class"
                bposition="left"
                :bmethod="leftBtn.method">
            </menu-btn>


        <menu-btn
                :bname="rightBtn.name"
                :bclass="rightBtn.class"
                bposition="right"
                :bmethod="rightBtn.method">
        </menu-btn>

        <menu-btn
                v-if="rightBtn2"
                :bname="rightBtn2.name"
                :bclass="rightBtn2.class"
                bposition="right"
                :bmethod="rightBtn2.method">
        </menu-btn>
        <h1 class="title">{{menu.title}}</h1>
    </header>
</template>
<style>
</style>
<script>

    import menuBtn from "./barBtn.vue"
    import tool from "../../libs/tool"

    export default{
        replace:true,
        props: ["menu"],
        data(){
            return{
                leftBtn:this.menu.leftBtn?this.menu.leftBtn:{method:function(){}},
                rightBtn:this.menu.rightBtn?this.menu.rightBtn:{method:function(){}},
                rightBtn2:this.menu.rightBtn2?this.menu.rightBtn2:{method:function(){}},
            }
        },
        components:{
            "menuBtn":menuBtn
        }
    }
</script>
