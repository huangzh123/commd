<template>
    <div class="mcheck {{isActive?'active':''}}" @click="check"></div>
</template>
<style>
    .mcheck{
        display: inline-block;
        position: relative;
        height:1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: transparent;
        border:1px solid #d2d2d2;
        overflow: hidden;
    }
    .mcheck.active:before,.mcheck.active:after{
        content: "";
        display: block;
        position: absolute;
        background-color: #fff;
        height: 2px;
    }
    .mcheck.active:before{
        width: 7px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 11px;
        left: 3px;
    }
    .mcheck.active:after{
        width: 36px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 1px;
        left: 3px;
    }
    .mcheck.active{
        border-width: 0;
        background-color: #2489c5;
    }
</style>
<script>
    export default{
        data(){
            return{
                isActive:true
            }
        },
        methods:{
            check(){
                this.isActive=!this.isActive;
            }
        }
    }
</script>
