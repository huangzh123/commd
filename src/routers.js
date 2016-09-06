'use strict';



function routerMap(router){
    router.map({
        '/shop': {
            component: function(resolve){
                require(['./view/shop/index.vue'],resolve);
            }
        },
        '/shop/getDetail/:id': {
            component: function(resolve){
                require(['./view/shop/detail.vue'],resolve);
            }
        },
        '/shop/list': {
            component: function(resolve){
                require(['./view/shop/list.vue'],resolve);
            }
        },
        '/shop/cart': {
            component: function(resolve){
                require(['./view/shop/cart.vue'],resolve);
            }
        },
        '/shop/getOrderList': {
            component: function(resolve){
                require(['./view/shop/order.vue'],resolve);
            }
        }
    })
}

module.exports=routerMap;


