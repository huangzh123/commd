<template>
    <div class="squaread">
        <div class="squad squad-A"></div>
        <div class="squad">
            <div class="squad-B"></div>
            <div>
                <div class="squad squad-C"></div>
                <div class="squad squad-D"></div>
                <div style="clear:both"></div>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
</template>
<style>
    .squaread{
        position: relative;
        width: 100%;
    }
    .squaread .squad{
        float: left;
    }
    .squad-A{
        position: relative;
        width: 40%;
        height: 9.2rem;
        background-image: url("http://gw.alicdn.com/tps/i2/TB1nQXGJVXXXXcEXXXXKKOh2VXX-432-567.jpg_q50.jpg?imgtag=avatar");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .squad-A:after{
        content: "";
        display: block;
        position: absolute;
        right: 0;
        top:0;
        height: 100%;
        width: 1px;
        background-color: #eaeaea;
    }
    .squad-A+.squad{
        width: 60%;
        height: 9.2rem;
    }
    .squad-B{
        position: relative;
        width: 100%;
        height: 42%;
        background-color: #fff;
        background-image: url("http://img.alicdn.com/tps/i1/TB1Te67HFXXXXXIXXXXbcAH0VXX-396-216.png?imgtag=avatar");
        background-size:auto 100% ;
        background-repeat: no-repeat;
    }
    .squad-B:before{
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background-image: url("http://img.alicdn.com/tfscom/TB1CyaYLFXXXXXWXXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg");
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: 95% center;
    }
    .squad-B:after{
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom:0;
        height: 1px;
        width: 100%;
        background-color: #eaeaea;
    }
    .squad-B+div{
        position: relative;
         width: 100%;
         height: 58%;
     }
    .squad-C{
        position: relative;
        height: 100%;
        width: 50%;
        background-image: url("http://gw.alicdn.com/tps/TB1koozJVXXXXcmXpXXXXXXXXXX-333-324.jpg_q50.jpg?imgtag=avatar");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .squad-C:after{
        content: "";
        display: block;
        position: absolute;
        right: 0;
        top:0;
        height:100%;
        width: 1px;
        background-color: #eaeaea;
    }
    .squad-D{
        height: 100%;
        width: 50%;
        background-image: url("http://img.alicdn.com/tps/TB1V.NiKpXXXXbuaXXXXXXXXXXX-333-324.jpg_q50.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

</style>
<script>

    export default{

    }
</script>
