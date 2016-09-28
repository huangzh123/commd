<template>
    <!--轮播图片-->
    <div class="entrance">
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i1/TB1eSyDGFXXXXaRXVXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">天猫</div>
        </div>
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i3/TB1unlMIVXXXXauXXXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">聚划算</div>
        </div>
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i2/TB12SU6MpXXXXXzXVXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">到家</div>
        </div>
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i4/TB14wW7JFXXXXbOXFXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">外卖</div>
        </div>
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i3/TB1pAV7HXXXXXX5aXXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">充值</div>
        </div>
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i3/TB1GafkKVXXXXcLXFXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">阿里旅行</div>
        </div>
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i3/TB1hW9KGFXXXXXLXpXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">领金币</div>
        </div>
        <div class="entrance-item" style="background-image: url('http://gw.alicdn.com/tps/i4/TB1Ed9LGFXXXXc3XXXXszjdGpXX-140-140.png?imgtag=avatar');">
            <div class="entrance-txt">分类</div>
        </div>
        <div style="clear: both;"></div>
    </div>
</template>
<style>
    .entrance{
        position: relative;
        background-color: #fff;
        padding-bottom: 0.5rem;
    }
    .entrance>.entrance-item{
        float: left;
        position: relative;
        box-sizing: border-box;
        width: 16%;
        margin: 0 4%;
        height: 4rem;
        /*background-image: url("http://gw.alicdn.com/tps/i1/TB1eSyDGFXXXXaRXVXXszjdGpXX-140-140.png?imgtag=avatar");*/
        background-size: 74%;
        background-position: 50% 32%;
        background-repeat: no-repeat;


    }
    .entrance-item>.entrance-txt{
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: center;
        height: 1rem;
        width: 100%;
        font-size: 13px;
        color:rgb(102, 102, 102);
        line-height: 1rem;
    }

</style>
<script>
    export default{

    }
</script>
