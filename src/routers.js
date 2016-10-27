'use strict';



function routerMap(router){
    router.map({
        //电商类
        //'/shop': {
        //    name:"home",
        //    component: function(resolve){
        //        require(['./view/shop/index.vue'],resolve);
        //    }
        //},
        //'/shop/getDetail/:id': {
        //    name:"detail",
        //    component: function(resolve){
        //        require(['./view/shop/detail.vue'],resolve);
        //    }
        //},
        //'/shop/list': {
        //    name:"list",
        //    component: function(resolve){
        //        require(['./view/shop/list.vue'],resolve);
        //    }
        //},
        //'/shop/cart': {
        //    name:"cart",
        //    component: function(resolve){
        //        require(['./view/shop/cart.vue'],resolve);
        //    }
        //},
        //'/shop/getOrderList': {
        //    name:"orders",
        //    component: function(resolve){
        //        require(['./view/shop/order.vue'],resolve);
        //    }
        //},

        //工程类
        '/enginer': {
            name:"home",
            component: function(resolve){
                require(['./view/enginer/index.vue'],resolve);
            }
        },
        '/enginer/list/:appCode/:funCode': {
            name:"list",
            component: function(resolve){
                require(['./view/enginer/list.vue'],resolve);
            }
        },
        '/enginer/form/:appCode/:funCode/:id': {
            name:"form",
            component: function(resolve){
                require(['./view/enginer/form.vue'],resolve);
            }
        },
    })
}

module.exports=routerMap;


