<template>
    <nav class="bar bar-tab">
        <a class="tab-item external {{tool.active?'active':''}}" href={{tool.href}} v-for="tool of tools">
            <span class="icon {{tool.icon}}"></span>
            <span class="tab-label">{{tool.name}}</span>
        </a>
    </nav>
</template>
<style>

</style>
<script>
    export default{
        props:["tools"],
        data(){
            return{}
        },

    }
</script>
