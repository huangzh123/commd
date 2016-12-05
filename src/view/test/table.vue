<template>
    <mytable></mytable>
</template>
<style>
</style>
<script>
    var config = require("../../config")();
    var vueResource = require("vue-resource");
    export default{
        data(){
            return{

            }
        },
        route: {
            data:function(transition){
                transition.next();
            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        },
        components:{
            mytable:require("../../component/enginer/mytable.vue"),
        },
        ready(){

        }
    }
</script>
