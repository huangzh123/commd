/**
 * Created by Administrator on 2016/8/2.
 */
"use strict";


//var Vue=require("vue");
//require("./../test/main.css");
//var StripMenu=require("./component/stripMenu/stripMenu.js");
//var Form=require("./component/form/form.js");
//var tool=require("./libs/tool.js");
////require("fastclick");
//
//window.onload=function(){
//
//
//
//    var form_config={
//        fields:[
//            {
//                field:"username",
//                title:"Name",
//                type:"input",
//                form:{
//                    placeholder:"请输入昵称",
//                    default:"小明"
//                }
//            },
//            {
//                field:"email",
//                title:"E-mail",
//                type:"input",
//                form:{
//                    placeholder:"请输入邮箱",
//                }
//            },
//            {
//                field:"password",
//                title:"Password",
//                type:"input",
//                form:{
//                    //default:"123456",
//                    placeholder:"请输入密码"
//                    //css:{opacity:0.7}
//                }
//            },
//            {
//                field:"team",
//                title:"Team",
//                type:"select",
//                form:{
//                    name:"请选择团队",
//                    options:[
//                        {name: "5人团队1", value: 'team_1',default:false},
//                        {name: "5人团队2", value: 'team_2',default:true},
//                        {name: "10人团队1", value: 'team_3',default:false}
//                    ]
//                }
//            },
//        ],
//        buttons:[
//            {
//                name:"注册",
//                css:{
//                    "margin":"30px 5px",
//                    "width":"15%",
//                    "backgroundColor":"orange",
//                    "borderColor":"orange"
//                },
//                className:"commd-btn-primary",
//                click:function(){
//                    console.log("param:",form.getValue())
//                }
//            },
//            {
//                name:"登录",
//                css:{
//                    "margin":"30px 5px",
//                    "width":"50%"
//                },
//                className:"commd-btn-primary",
//                click:function(){
//                    console.log("param:",form.getValue())
//                }
//            }
//        ]
//    }
//    var form=new Form(form_config);
//    form.replaceto(document.body);
//
//    var strip_c={
//        arrs:[
//            {
//                title:"关于我们",
//                click:function(){
//                    console.log("abous us!");
//                }
//            },{
//                title:"版本更新",
//                click:function(){
//                    console.log("version update！");
//                }
//            }
//        ]
//    }
//   new StripMenu(strip_c).appendto(document.getElementsByClassName("commd-form-main")[0]);
//
//}

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
var router=new VueRouter();
routerMap(router);

router.start(App, "#app");


