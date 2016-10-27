<template>

    <button class="button button-link button-nav pull-{{position}}" v-if="bname" @click="bmethod(this)">
        <span class="txt-middle {{bclass}}"   v-if="position=='right'">{{bname}}</span>
        <span class="icon {{bclass}}"></span>
        <span class="txt-middle {{bclass}}"   v-if="position!='right'">{{bname}}</span>
    </button>
    <a v-else class="icon {{bclass}} pull-{{position}}" @click="bmethod(this)"></a>
</template>
<style>
    .txt-middle{
        vertical-align: middle;
    }
</style>
<script>
    /**
     * bname:按钮名称，
     * bmethod:按钮点击函数
     */
    export default{
        props:["bname","bmethod","bclass","bposition"],
        data(){
            return{
                position:this.bposition=="right"?"right":"left",
            }
        }
    }
</script>
