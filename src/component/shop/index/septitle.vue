<template>
    <div class="seqtitle">
        <div class="sttxt">猜你喜欢</div>
    </div>
</template>
<style>
    .seqtitle{

    }
    .seqtitle>.sttxt{
        position: relative;
        height: 1.8rem;
        line-height: 1.8rem;
        width: 100%;
        font-size: 13px;
        color: #777;
        text-align: center;
        vertical-align: middle;
    }
    .seqtitle>.sttxt:before{
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        width: 35%;
        background-color: #b9b9b9;
        top: 50%;
        left: 4%;


    }
    .seqtitle>.sttxt:after{
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        width: 35%;
        background-color: #b9b9b9;
        top: 50%;
        right: 4%;
    }

</style>
<script>

    export default{

    }
</script>
