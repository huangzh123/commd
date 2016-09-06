<template>
    <div>
        <!--菜单栏-->
        <bar :menu="menu"></bar>
        <!--内容区-->
        <div class="content"><myform :cols="content.cols" :btns="content.btns"></myform></div>
        <!--工具栏-->
        <!--<tooler :tools="tools"></tooler>-->
    </div>
</template>
<style lang="sass">

</style>
<script>
    import bar from '../../component/bar/bar.vue'
    import tooler from '../../component/tooler/tooler.vue'
    import myform from '../../component/form/form.vue'
    export default{
        data(){
            return{
                menu:{
                    title:'商品详情',
                    leftBtn:{
                        class:"icon-left",
                        method:function(){
                            history.go(-1);
                        }
                    },
                    rightBtn:{
                        name:"提交",
//                        class:"icon-refresh",
                        method:function(){
                            console.log("刷新了")
                        }
                    }
                },
                tools:[
                    {
                        icon:"icon-home",
                        name:"文案1",
                        active:true
                    },
                    {
                        icon:"icon-home",
                        name:"文案3"
                    },
                    {
                        icon:"icon-home",
                        name:"文案4"
                    }
                ],
                content:{
                    cols:[
                        {
                            "title":"测试",
                            currentcomponent:"forminput",
                            "type":"number",
                            "placeholder":"123456",
                            "value":"44444"
                        },
                        {
                            "title":"测试2",
                            currentcomponent:"forminput",
                            "type":"email",
                            "placeholder":"please input email",
                            "value":"594421292@qq.com"
                        }
                    ],
                    btns:[
                        {size:"50",style:"danger",name:"清空"},
                        {size:"50",style:"success",name:"提交"},
                    ]
                }

            }
        },
        components:{
            bar:bar,
            tooler:tooler,
            myform:myform
        }
    }
</script>
