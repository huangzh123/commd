<template>
    <div>
        <!--菜单栏-->
        <bar :menu="menu"></bar>
        <!--内容区-->
        <div class="content">
            <hr>
            <a v-link="{ path: '/shop/list' }">商品列表</a>
            <hr>
            <a v-link="{ path: '/shop/getDetail/123' }">商品详情</a>
            <hr>
            <a v-link="{ path: '/shop/getOrderList' }">我的订单</a>
            <hr>
            <a v-link="{ path: '/shop/cart' }">购物车</a>
            <hr>
        </div>
        <!--工具栏-->
        <tooler :tools="tools"></tooler>
    </div>
</template>
<style lang="sass">
    @import "../../component/vux/vux.css"
</style>
<script>
    import bar from '../../component/bar/bar.vue'
    import tooler from '../../component/tooler/tooler.vue'
    export default{
        data(){
            return{
                menu:{
                    title:'商场示例',
                    leftBtn:{
                        class:"icon-me",
                        method:function(){
                            console.log("选择了“我”")
                        }
                    },
                    rightBtn:{
//                        name:"提交",
                        class:"icon-search",
                        method:function(){
                            console.log("选择了“搜索”")
                        }
                    }
                },
                tools:[
                    {
                        icon:"icon-home",
                        name:"首页",
                        active:true
                    },{
                        icon:"icon-cart",
                        name:"购物车"
                    },{
                        icon:"icon-star",
                        name:"收藏"
                    }
                ]
            }
        },
        components:{
            bar:bar,
            tooler:tooler,
        }
    }
</script>
