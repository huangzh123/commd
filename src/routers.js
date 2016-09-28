'use strict';



function routerMap(router){
    router.map({
        '/shop': {
            name:"home",
            component: function(resolve){
                require(['./view/shop/index.vue'],resolve);
            }
        },
        '/shop/getDetail/:id': {
            name:"detail",
            component: function(resolve){
                require(['./view/shop/detail.vue'],resolve);
            }
        },
        '/shop/list': {
            name:"list",
            component: function(resolve){
                require(['./view/shop/list.vue'],resolve);
            }
        },
        '/shop/cart': {
            name:"cart",
            component: function(resolve){
                require(['./view/shop/cart.vue'],resolve);
            }
        },
        '/shop/getOrderList': {
            name:"orders",
            component: function(resolve){
                require(['./view/shop/order.vue'],resolve);
            }
        }
    })
}

module.exports=routerMap;


