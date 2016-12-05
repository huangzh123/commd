<template>
    <!--菜单栏-->
    <bar :menu="menu"></bar>
    <!--工具栏-->
    <!--<tooler :tools="tools"></tooler>-->
    <!--内容区-->
    <div class="content pull-to-refresh-content infinite-scroll infinite-scroll-bottom" data-ptr-distance="55">
    <!--<div class="content native-scroll" style="background-color:#fff">-->
        <!-- 默认的下拉刷新层 -->
        <div class="pull-to-refresh-layer">
            <div class="preloader"></div>
            <div class="pull-to-refresh-arrow"></div>
        </div>
        <!--表格-->
        <div class="content-inner" style="background-color:#fff">
            <div class="table-responsive">
                <table class="table" id="mytable">
                    <thead @click.stop="chooseAll(this)"><th v-for="thead in content.table.thead">{{thead.name}}</th></thead>
                    <tbody>
                    <tr
                            v-for="tr in content.table.tbody" track-by="$index"
                            @click.stop.prevent="choosetr(this,tr.primarykeyValue,$event)"
                            primarykeyvalue="{{tr.primarykeyValue}}"
                            primarykey="{{tr.primaryKey}}"
                    >
                        <td v-for="td in tr.arr" track-by="$index" >{{td.value}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- 加载提示符 -->
        <div class="infinite-scroll-preloader">
            <div class="preloader"></div>
        </div>
    </div>
    <div id="headcontainer"></div>
    <!--search-->
    <div class="searchForm" :class="{'active':status==2}">
        <div class="list-block">
            <ul>
                <li v-for="item in query">
                    <div class="item-content">
                        <div class="item-media"><i class="icon icon-form-name"></i></div>
                        <div class="item-inner">
                            <div class="item-title label">{{item.name}}</div>
                            <div class="item-input">
                                <!--input-->
                                <input v-if="item.cType==0 || item.cType==1" type="text" placeholder="" v-model="item.value" >
                                <!--hidden-->
                                <input v-if="item.cType==2" type="text" placeholder="" v-model="item.value" >
                                <!--select-->
                                <select v-if="item.cType==3 || item.isSelect"  v-model="item.value">
                                    <option :value="option.code" v-for="option in item.dataset">{{option.name}}</option>
                                </select>
                                <!--date-->
                                <input v-if="item.cType==10" type="date" data-toggle='date'  v-model="item.value" />
                                <!--datetime-->
                                <input v-if="item.cType==9" type="datetime" data-toggle='date'  v-model="item.value" />
                                <!--textarea-->
                                <textarea v-if="item.cType==7" :disabled="disabled" v-model="item.value"></textarea>
                            </div>
                        </div>
                    </div>
                </li>
                <!--<li>-->
                    <!--<div class="item-content">-->
                        <!--<div class="item-media"><i class="icon icon-form-email"></i></div>-->
                        <!--<div class="item-inner">-->
                            <!--<div class="item-title label">商品价格</div>-->
                            <!--<div class="item-input">-->
                                <!--<input type="email" placeholder="">-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<div class="item-content">-->
                        <!--<div class="item-media"><i class="icon icon-form-gender"></i></div>-->
                        <!--<div class="item-inner">-->
                            <!--<div class="item-title label">商品状态</div>-->
                            <!--<div class="item-input">-->
                                <!--<select>-->
                                    <!--<option>上架中</option>-->
                                    <!--<option>已下架</option>-->
                                <!--</select>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<div class="item-content">-->
                        <!--<div class="item-media"><i class="icon icon-form-calendar"></i></div>-->
                        <!--<div class="item-inner">-->
                            <!--<div class="item-title label">上架日期</div>-->
                            <!--<div class="item-input">-->
                                <!--<input type="date" placeholder="时间范围" value="2014-04-30">-->
                                <!--<div class="searchtime_center">至</div>-->
                                <!--<input type="date" placeholder="时间范围" value="2014-04-30">-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<div class="item-content">-->
                        <!--<div class="item-media"><i class="icon icon-form-toggle"></i></div>-->
                        <!--<div class="item-inner">-->
                            <!--<div class="item-title label">精确匹配</div>-->
                            <!--<div class="item-input">-->
                                <!--<label class="label-switch">-->
                                    <!--<input type="checkbox">-->
                                    <!--<div class="checkbox"></div>-->
                                <!--</label>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
            </ul>
        </div>
        <div class="content-block">
            <div class="row">
                <div class="col-100" @click="search(this)"><a class="button button-big button-fill button-default">开始搜索</a></div>
            </div>
        </div>
    </div>
</template>
<style>
    @import "../../static/bootstrap.css";
    tbody>tr:active{
        background-color: #eaeaea;
    }
    .choose_tr{
        background-color:rgba(249, 42, 42, 0.52);
    }
    .color_red{
        color:red
    }
    .searchForm{
        position: fixed;
        top: 0;
        left: 0;
        /*height: 100%;*/
        height: 0;
        width: 100%;
        background-color: #fff;
        transition: .2s;
        overflow: hidden;
        padding-top: 44px;
    }
    .searchForm.active{
        height: 100%;
    }
    .searchtime_center{
        height: .8rem;
        font-size: 12px;
        color: #808080;
        width: 100%;
        text-align: center;
        padding-right: 1.6rem;
    }
    .item-input>input[type='date']{
        text-align: left;
    }
    .table td{
        max-width: 180px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    th>div{
        padding: 8px;
        line-height: 1.42857143;
        white-space: nowrap;
    }
    #headcontainer{
        position: fixed;
        top: 44px;
        overflow: hidden;
        width: 100%;
        margin: 0;
        left: 0;
        background-color: #fff;
        /*height: 37px;*/
    }
    .table td,.table th,#headcontainer th{
        text-align: center;
    }
</style>
<script>
    var config = require("../../config")();
    var tool = require("../../libs/tool")();
    var Softcan = require("../../sc/softcan");
    export default{
        data(){
            var self =this;
            return {
                eventBtns:[{
                text: '请选择以下操作',
                label: true
            }],
                menu:{
                    leftBtn:{
                        class:"icon-left",
                        name:"",
                        method:function(obj){
                            if(self.status==1){
                                self.status=0
                                $("tbody").find("tr").removeClass("choose_tr");
                            }else if(self.status==2){
                                self.status=0
                            }else{
//                                obj.$route.router.go({path:"/enginer?appCode="+self.appCode});
                                window.history.go(-1);
                            }
                        }
                    },
                    rightBtn:{
                        name:"",
                        class:"icon-menu",
                        method:function(){
                            if(self.status==0){
                                var buttons2 = [
                                    {
                                        text: '取消',
                                        bg: 'danger'
                                    }
                                ];
                                var groups = [self.eventBtns,buttons2];
                                $.actions(groups);
                            }else if(self.status==1){
                                //删除操作
                                var choosedTR=$("tbody").find("tr.choose_tr");
                                if(choosedTR.length<=0) return $.alert('请先选择条目！');
//                                确认框
                                $.confirm('确定要删除这 '+choosedTR.length+' 条记录吗?', function () {
                                    var paramArr=[];
                                    for(var i=0;i<choosedTR.length;i++){
                                        var param={};
                                        param[$(choosedTR[i]).attr("primarykey")]=$(choosedTR[i]).attr("primarykeyvalue");
                                        paramArr.push(param);
                                    }
                                    self.softcan.deleteData(paramArr,function(err,data){
                                        if(data.success){
                                            $.toast("删除成功");
                                            self.status=0;
                                            $("tbody").find("tr").removeClass("choose_tr");
                                            self.currentPage=1;
                                            self.softcan.generateTable(self.pageSize,self.currentPage++,null,function(err,data){
                                                self.content.table=data;
                                            });
                                        }else{
                                            $.toast("操作失败");
                                        }
                                    })
                                });
                            }else if(self.status==2){
                                //检索操作
                                self.status=0;
                            }else{
                                console.error("非法操作",self.status);
                                self.status=0;
                            }
                        }
                    },
                    rightBtn2:{
                        name:"",
                        class:"icon-search",
                        method:function(){
                            self.status=2;
                        }
                    }
                },
                content:{
                    modules:[],
                    table:{
                        thead:[],
                        tbody:[]
                    }
                },
                status:0,//0:列表  1:删除  2：检索
                currentPage:1,//当前页
                pageSize:35,//页大小
                loading:false,//正在加载
                appCode:"",
                funCode:"",
                bindFormCode:"",
                query:[],
                //请求数据服务
                requestTableData:function(callback){
                    var query_param={};
                    for(var i=0;i<self.query.length;i++){
                        if(self.query[i].value){
                            query_param[self.query[i].key]=self.query[i].value;
                        }
                    }
                    self.softcan.generateTable(self.pageSize,self.currentPage,query_param,callback);
                },
                //绑定数据
                bindTableData:function(err,data){
//                    $('.content').scrollTop(1);
                    //发现没有更多数据              con
                   if(err){
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                       $.detachInfiniteScroll($('.infinite-scroll-bottom'));
                       // 删除加载提示符
                       $('.infinite-scroll-preloader').hide();
                       // 加载完毕需要重置
                       $.pullToRefreshDone('.pull-to-refresh-content');
                       return $.toast("访问出错了！");
                   }
                    if(data.tbody.length< self.pageSize){
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                        $.detachInfiniteScroll($('.infinite-scroll-bottom'));
                        // 删除加载提示符
                        $('.infinite-scroll-preloader').hide();
                        //重新设置flag
                        self.loading=false;
                    }
                    if(self.currentPage==1){
                        self.content.table=data;
                        // 加载完毕需要重置
                        $.pullToRefreshDone('.pull-to-refresh-content');
                        if(self.loading==false && data.tbody.length >= self.pageSize){
                            //重置上拉滚动
                            $.attachInfiniteScroll($('.infinite-scroll-bottom'));
                            $('.infinite-scroll-preloader').show();
                        }
                    }else{
                        //发现没有更多数据
                        if(data.tbody.length>0){
                            // 数组合并
                            self.content.table.tbody=self.content.table.tbody.concat(data.tbody);
                            //容器发生改变,如果是js滚动，需要刷新滚动
                            $.refreshScroller();
                        }
                        //重新设置flag
                        self.loading=false;
                    }

                },

            };
        },
        route: {
            data:function(transition){
                var self=this;
                self.appCode=transition.to.params.appCode;
                self.funCode=transition.to.params.funCode;
                self.bindFormCode=transition.to.query.bindFormCode;
                transition.next();
            },
            activate: function (transition) {
                if(transition.from.name=="form"){
                    this.needFresh=false;
                }
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        },
        components:{
            bar:require('../../component/bar/bar.vue'),
        },
        methods:{
            //单选
            choosetr(self,primarykeyValue,event){
                switch (self.status){
                    case 0:
                        self.$route.router.go({name:'form',params:{'id':primarykeyValue,'appCode':self.appCode,'funCode':self.bindFormCode}});
                        break;
                    case 1:tool.toggleClass(event.target.parentElement,"choose_tr");
                        break;
                }
            },
            //全选/反选
            chooseAll(self){
                if(self.status!=1) return;
                if($("tr.choose_tr").length<$("tbody").find("tr").length){
                    $("tbody").find("tr").addClass("choose_tr");
                }else{
                    $("tbody").find("tr").removeClass("choose_tr");
                }
            },
            search(self){
                self.currentPage=1;
                self.requestTableData(function(err,data){
                    self.bindTableData(err,data);
                    self.status=0;
                });
            }
        },
        watch:{
            status(newVaule,oldValue){
                var self = this;
                switch (newVaule){
                    case 0:
//                        self.menu.rightBtn.name="操作";
                        self.menu.rightBtn.name="";
                        self.menu.rightBtn.class="icon-menu";
                        self.menu.leftBtn.name="";
                        self.menu.leftBtn.class="icon-left";
                        self.menu.rightBtn2.class="icon-search";
                        break;
                    case 1:
                        self.menu.rightBtn.name="";
                        self.menu.rightBtn.class="icon-remove color_red";
                        self.menu.leftBtn.name="取消";
                        self.menu.leftBtn.class="";
                        self.menu.rightBtn2.class="";
                        break;
                    case 2:
                        self.menu.rightBtn.name="";
                        self.menu.rightBtn.class="";
                        self.menu.leftBtn.name="取消";
                        self.menu.leftBtn.class="";
                        self.menu.rightBtn2.class="";
                        break;
                }
            }
        },
        ready(){
            $.init();
            var self=this;
            self.softcan = new Softcan(self.appCode,self.funCode,self);
            //页面初始化请求服务接口
            self.requestTableData(function(err,data){
                //渲染当前功能列表
                var events=self.softcan.source.events;
                self.query=self.softcan.queryKeys;
                for(var i =0; i<events.length;i++){
                    //添加："P_03" ,删除："P_04" ,编辑："P_08"  ,查询："P_09",
                    var eventCode=events[i].eventCode;
                    switch (events[i].eventCode){
                        case "P_03":
                            self.eventBtns.push({
                                text: '新增',
//                                bold: true,
                                onClick: function() {
                                    self.$route.router.go("/enginer/form/"+self.appCode+"/"+self.bindFormCode+"/new")
                                }
                            })
                            ;break;
                        case "P_04":
                            self.eventBtns.push({
                                text: '删除',
//                                text: '批量删除',
                                color: 'danger',
                                onClick: function() {
                                    self.status=1
                                }
                            })
                            ;break;
                        case "P_08":
                            //编辑功能
                            ;break;
                        case "P_09":
                            self.eventBtns.push({
                                text: '搜索',
                                onClick: function() {
                                    self.status=2
                                }
                            })
                            ;break;

                    }
                }
                self.bindTableData(err,data);
            })
            //监听向下拉，刷新数据
            $(document).on('refresh', '.pull-to-refresh-content',function(e) {
                self.currentPage=1;
                self.requestTableData(self.bindTableData);
            });
            //监听向上拉，加载更多
            $(document).on('infinite', '.infinite-scroll-bottom',function() {
                // 如果正在加载，则退出
                if (self.loading) return;
                // 设置flag
                self.loading = true;
                // 模拟1s的加载过程
                ++self.currentPage;
                self.requestTableData(self.bindTableData);
            });
            //监听列表滚动（垂直）
            $('.content').scroll(function(){
                var head=$("#mytable>thead");//头部
                var container=$('.content');//滚动的容器
                var table=$("#mytable");//表格
                var scroll_top = container.scrollTop() - table.offset().top;//判断是否到达窗口顶部
                var head_container=$("#headcontainer");//固定的标题栏容器
                var head_fixed=$("#headfixed");//固定的标题栏
                if(scroll_top > 0){
                    if(self.headwidth==head.width()){
                        head_container.show();

                        return;
                    }else{
                        self.headwidth=head.width();
                    }
                    head_container.css({'height':head.height()});
                    if(head_fixed.length<=0){
                        //复制head
                        head_fixed=head.clone().attr("id","headfixed");
                        head_container.append(head_fixed);

                    }
                    var arr_th=$('#mytable th');
                    var arr_th_new=$("#headfixed th");
                    for(var i=0;i<arr_th.length;i++){
                        $(arr_th_new[i]).html("<div style='width:"+arr_th[i].offsetWidth+"px;height: "+head.height()+"px'>"+$(arr_th[i]).html()+"</div>")
                    }
                    head_container.show();
                    head_container.scrollLeft($(".table-responsive").scrollLeft());
                }else{
                    head_container.hide();
                }
            });
            //监听列表滚动（水平）
            $('.table-responsive').scroll(function(){
                if($("#headcontainer").length<=0) return;
                $("#headcontainer").scrollLeft(this.scrollLeft);
            });
        }
    }
</script>
