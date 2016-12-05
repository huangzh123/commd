/**
 * Created by Administrator on 2016/8/2.
 */
"use strict";




var Vue=require("vue");
var VueRouter=require("vue-router");
var VueResource = require("vue-resource");
var routerMap=require("./routers");
var vueAnimatedList=require("vue-animated-list");

//Vue.http.options.root = '/root';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vueAnimatedList);
var App=Vue.extend({});
var router=new VueRouter({
    history: false,
    hashbang: true
});
routerMap(router);
Vue.http.options.emulateJSON = true;
//Vue.http.options.emulateHTTP = true;


router.start(App, "#app");


