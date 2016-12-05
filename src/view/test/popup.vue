<template>
    <header class="bar bar-nav">
        <h1 class="title">Popup(JavaScript)</h1>
    </header>
    <!--...-->
    <div class="content">
        <div class="content-block">
            <p><a class="open-about">Open About Popup </a></p>
            <p><a  class="open-services">Open Services Popup </a></p>
        </div>

    </div>
    <!-- About Popup -->
    <div class="popup popup-about">
        <div class="content-block">
            <p>About</p>
            <p><a class="close-popup">Close popup</a></p>
            <p>Lorem ipsum dolor ...</p>
        </div>
    </div>
    <!-- Services Popup -->
    <div class="popup popup-services">
        <div class="content-block">
            <p>Services</p>
            <p><a  class="close-popup">Close popup</a></p>
            <p>Lorem ipsum dolor ...</p>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        ready(){
            $.init();
            $(document).on('click','.open-about', function () {
                console.log($('.popup-about'));
                console.log($.sizeNavbars)
                $.popup('.popup-about');
            });

            $(document).on('click','.open-services', function () {
                $.popup('.popup-services');
            });
        }
    }
</script>
