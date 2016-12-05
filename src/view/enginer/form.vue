<template>
        <!--菜单栏-->
        <bar :menu="menu"></bar>
        <!--工具栏-->
        <!--<tooler :tools="tools"></tooler>-->
        <!--内容区-->
        <div class="content native-scroll">
            <div class="content-inner">
                <div class="list-block">
                    <ul >
                        <li v-for="item in content.form">
                            <div class="item-content">
                                <div class="item-media"><i class="icon icon-form-name"></i></div>
                                <div class="item-inner">
                                    <div class="item-title label">{{item.name}}</div>
                                    <div class="item-input">
                                        <!--input-->
                                        <input v-if="item.cType==0 || item.cType==1" type="text" placeholder="" v-model="item.value" :disabled="disabled">
                                        <!--hidden-->
                                        <input v-if="item.cType==2" type="text" placeholder="" v-model="item.value" :disabled="disabled">
                                        <!--select-->
                                        <select v-if="item.cType==3 || item.isSelect"  :disabled="disabled" v-model="item.value">
                                            <option :value="option.code" v-for="option in item.dataset">{{option.name}}</option>
                                        </select>
                                        <!--date-->
                                        <input v-if="item.cType==10" type="date" data-toggle='date' :disabled="disabled" v-model="item.value" />
                                        <!--datetime-->
                                        <input v-if="item.cType==9" type="datetime" data-toggle='date' :disabled="disabled" v-model="item.value" />
                                        <!--textarea-->
                                        <textarea v-if="item.cType==7" :disabled="disabled" v-model="item.value"></textarea>
                                        <!--file-->
                                        <input v-if="item.cType==13 && !disabled" :disabled="disabled" type="file"  @change="upload(this)" />
                                        <img v-if="item.cType==13"  :src="item.value"  />
                                        <!--other-->
                                        <input v-if="[0,1,2,3,9,10,7,13].indexOf(item.cType)==-1" type="text" placeholder="" v-model="item.value" :disabled="disabled">
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="content-block" v-show="!disabled">
                    <div class="row">
                        <!--<div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>-->
                        <div class="col-100" @click="saveData(this)"><a class="button button-big button-fill button-success">保存</a></div>
                    </div>
                </div>
            </div>
        </div>
</template>
<style >
    @import "../../component/vux/vux.css";
    @import "../../static/bootstrap.css";
    tbody>tr:active{
        background-color: #eaeaea;
    }
</style>
<script>
    var config = require("../../config")();
    var vueResource = require("vue-resource");
    var Softcan = require("../../sc/softcan");
    var tool = require("../../libs/tool")();
    export default{
        data(){
            var self = this;
            return{
                menu:{
//                title:'工程示例',
                leftBtn:{
                    class:"icon-left",
                    method: function (obj) {
//                        obj.$route.router.go({
//                            path:"/enginer/list/"+self.appCode+"/"+self.funCode
//                        })
                        window.history.go(-1);
                    }
                },
                rightBtn:{
                    name:"编辑",
                    method:function(obj){
                        if(self.menu.rightBtn.name=="") return;
                        if(self.menu.rightBtn.name=="取消"){
                            self.menu.rightBtn.name="编辑";
                            self.disabled=true;
                        }else{
                            self.menu.rightBtn.name="取消";
                            self.disabled=false;
                        }
                    }
                }},
                tools:[
                    {
                        icon:"icon-home",
                        name:"首页",
                        active:true
                    },{
                        icon:"icon-cart",
                        name:"购物车",
                        href:"/shop/cart"
                    },{
                        icon:"icon-me",
                        name:"我的订单",
                        href:"/shop/getOrderList"
                    }
                ],
                content:{
                    form:[]
                },
                disabled:true,
                //tool.splitSelectValue
                splitSelectValue:tool.splitSelectValue,
            }
        },
        route: {
            data:function(transition){
                var self=this;
                self.appCode=transition.to.params.appCode;
                self.funCode=transition.to.params.funCode;
                self.id = transition.to.params.id;
                self.softcan = new Softcan(self.appCode,self.funCode,self);
                if(self.id === "new"){
//                   新增操作
                    self.menu.rightBtn.name="";
                    self.disabled=false;
                    self.softcan.getForm(function(err,data){
                        if(err) return $.alert(err);
                        self.content.form=data;
                        transition.next();
                    })
                }else{
//                    编辑操作
                    self.softcan.getForm(self.id,function(err,data){
                        if(err) return $.alert(err);

                        for(var i=0;i<data.length;i++){
                            if(data[i].cType==3 || data[i].isSelect){
                                data[i].value=tool.splitSelectValue( data[i].value)
                            }
                        }
                        self.content.form=data;
                        console.log(self.content.form)

                        transition.next();
                    })
                }

            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        },
        components:{
            bar:require('../../component/bar/bar.vue'),
            tooler:require('../../component/tooler/tooler.vue')
        },
        methods:{
            /**
             * 保存数据
             */
            saveData(self){
                var param={};
                for(var i= 0;i<self.content.form.length;i++){
                    param[self.content.form[i].key]=self.content.form[i].value
                }
                if(self.id === "new" || self.id === undefined || self.id === ""){
                    param["_mode"]="add"
                }else{
                    param["_mode"]="edit"
                }
                self.softcan.saveData(param,function(error,response){
                    if(error) return $.alert(error);
                    if(response.success){
                        $.toast("保存成功");
                        self.disabled=true;
                        if(self.id !== "new") self.menu.rightBtn.name="编辑";
                    }else if(response.message && response.message.error){
                        $.alert(response.message.error);
                    }
                })
            },
            /**
             * 图片上传
             */
            upload(self){
                tool.uploadImg(self.$event,config.requrl.imgUpload+"?appCode="+self.appCode,function(filename){
                    console.log(config.requrl.imgGet+"?_app="+self.appCode+"&_file="+filename)
                   self.item.value=config.requrl.imgGet+"?_app="+self.appCode+"&_file="+filename;
                })
            }
        },
        ready(){
            console.log("ready")
            $.init();
        }
    }
</script>
