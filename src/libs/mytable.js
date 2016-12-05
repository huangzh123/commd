/**
 * Created by gohero on 2016/11/10.
 */
"use strict";

var tool=require("./tool.js")();


function Mytable(){


}

//属性
Mytable.prototype={
     //表头
     header:[],
     //表数据
     data:[],
    //容器
    container:"body",
    //固定行的数组
    fixed_rows:[],
    //固定列的数组
    fixed_col:[],
    //元素到顶部的距离
    rootOffset:0
}

//默认配置
Mytable.prototype.DEFAULT = {
    //单元格
    cell:{
        //行合并数
        colspan:undefined,
        //列合并数
        rowspan:undefined,
        //实际值
        value:"",
        //展现值
        name:"",
        //样式class
        class:undefined,
        //id
        cid:"",
        width:undefined,
        height:20,
        //属性名 td、th
        tagname:"td",
        paddingX:12,
        paddingY:8
    }
}

/**
 * 创建表格
 * @param param
 */
Mytable.prototype.create = function (param) {
    var self = this;
    //合并参数
    self= tool.extend(self,param);
    var dom_header = self._bindHeader();
    var dom_bodier = self._bindBodier();
    var mainBody = self._createMainContainer();
    var table = document.createElement("table");
    tool.addClass(table,"table");
    tool.addClass(table,"table-bordered");
    table.appendChild(dom_header);
    table.appendChild(dom_bodier);
    mainBody.appendChild(table);
    //固定行
    var fixedRow = self._createfixed_row();
    var fixedCol = self._createfixed_col();
    mainBody.appendChild(fixedRow);
    mainBody.appendChild(fixedCol);
    //mainBody.appendChild(fixedCol);
    $(self.container)[0].appendChild(mainBody);
}

/**
 * 转变单元格的参数格式并初始化（字符串转化成对象）
 * @private
 */
Mytable.prototype._exchangCelltoObject = function (cell) {
    var self = this;
    if(cell == undefined || cell == null) return cell;
    if(typeof cell == "string"){
        cell= new Object({
            name:cell
        })
    }
    cell = tool.extend(self.DEFAULT.cell,cell);
    return cell
}

/**
 * 绑定单元格
 * @param param
 * @returns {Element}
 * @private
 */
Mytable.prototype._bindCell = function(param){
    if(!param) return;
    //创建div为了可以改变窗口的大小
    var div = document.createElement("div");
    var td = document.createElement("td");
    if(param.tagname == "th") td = document.createElement("th");
    //设置cell属性
    if(param.cid) td.setAttribute("cid",param.cid);
    if(param.colspan) td.setAttribute("colspan",param.colspan);
    if(param.rowspan) td.setAttribute("rowspan",param.rowspan);
    if(param.class) tool.addClass(div,param.class);
    if(param.name){
        var text=document.createTextNode(param.name)
        div.appendChild(text);
    };
    if(param.value) div.setAttribute("value",param.value);
    if(param.height) div.style.height=param.height+"px";
    if(param.width) div.style.width=param.width+"px";
    if(param.paddingY){
        td.style.paddingTop=param.paddingY+"px"
        td.style.paddingBottom=param.paddingY+"px"
    };
    if(param.paddingX){
        td.style.paddingLeft=param.paddingX+"px"
        td.style.paddingRight=param.paddingX+"px"
    };
    td.appendChild(div);
    return td;
}

/**
 * 绑定表头数据
 * @private
 */
Mytable.prototype._bindHeader = function(){
    var self = this;
    //重新组装参数的字段
    var header_new=[];
    var thead=document.createElement("thead");
    for(var i = 0; i<self.header.length; i++){
        var cell = self.header[i];
        if(!cell) continue;
        cell=self._exchangCelltoObject(cell);
        cell=tool.extend(cell,{
            tagname:"th",
            cid:"_MT#0#"+(i+1)
        });
        header_new.push(cell);
        var td=self._bindCell(cell);
        thead.appendChild(td);
    }
    //重新设置参数
    self.header=header_new;
    return thead;
}

/**
 * 绑定表tbody数据
 * @private
 */
Mytable.prototype._bindBodier = function(){
    var self = this;
    //重新组装参数的字段
    var bodier_new=[];
    var tbody=document.createElement("tbody");
    //遍历行数据
    for(var i=0;i<self.data.length;i++){
        var tr=document.createElement("tr");
        tr.setAttribute("id","_MY_ROW_"+(i+1));
        var rows_new=[];
        //遍历列数据
        var row=self.data[i];
        for(var m=0;m<row.length;m++){
            var cell = row[m];
            if(!cell) continue;
            cell=self._exchangCelltoObject(cell);
            cell=tool.extend(cell,{
                //标签名
                tagname:"td",
                //设置ID
                cid:"_MT#"+(i+1)+"#"+(m+1)

            });
            rows_new.push(cell);
            var td=self._bindCell(cell);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        bodier_new.push(rows_new);
    }
    //重新设置参数
    self.data=bodier_new;
    return tbody;
}

/**
 * 合并单元格
 * @param from {row col}
 * @param to {row col}
 */
Mytable.prototype.mergeto = function(from,to){
    var self = this;
    var cid="_MT#"+from.row+"#"+from.col;
    var el=$("td[cid='"+cid+"']");
    if(el.length<=0) return;
    var space_row=Math.abs(from.row-to.row);
    var space_col=Math.abs(from.col-to.col);
    if(space_row>0){
        el.prop("rowspan",space_row+1);

        //重新计算高度及行高
        var div = $(el).find("div");
        //div的高度
        var height = div.height();
        //cell的padding
        var padding=self.DEFAULT.cell.paddingY;
        div.css("height",((height*(space_row+1))+(2*space_row*padding))+"px")
        div.css("line-height",((height*(space_row+1))+(2*space_row*padding))+"px")
    }
    if(space_col>0) el.prop("colspan",space_col+1);
}

/**
 * 创建表格容器
 * @returns {Element}
 * @private
 */
Mytable.prototype._createMainContainer = function () {
    var self = this;
    var mainBody = document.createElement("div");
    tool.addClass(mainBody,"mytable");
    //绑定监听事件，使只能在同一个方向滚动
    document.addEventListener('touchstart',touchevent, false);
    document.addEventListener('touchmove',touchevent, false);
    document.addEventListener('touchend',touchevent, false);
    //记录上一次滚动的横坐标
    var lastmove_clientX=0;
    //记录上一次滚动的纵坐标
    var lastmove_clientY=0;
    //滚动的方向
    var direct="x";
    //是否是第一次接触的标记
    var isFirstTouch=false;
    //横坐标额变化量
    var differ_x=0;
    //纵坐标额变化量
    var differ_y=0;
    //定时器
    var time="";
    //最后一次touch的时间戳
    var lasttouchtime=0;
    //间隔时间
    var betweenTime=0;
    //Touch事件监听()
    function touchevent(event){
        event = event || window.event;
        event.preventDefault();
        switch(event.type){
            case "touchstart":
                clearInterval(time);
                isFirstTouch=true;
                lasttouchtime=new Date().getTime();
                lastmove_clientX=event.touches[0].clientX;
                lastmove_clientY=event.touches[0].clientY;
                //console.log("Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")");
                break;
            case "touchend":
                //console.log("Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")");

                //惯性滚动
                var speed=0;
                var distance=direct == "x"?differ_x:differ_y;
                //distance = distance.toFixed(3);
                speed=distance/betweenTime;
                speed*=4;
                var t = 10;
                if(distance==0) return;
                time=setInterval(function(){
                    speed*=0.8;
                    distance=speed*t;
                    //distance = distance.toFixed(3);
                    //console.log(distance,mainBody.scrollLeft-distance);
                    if(direct == "x")  $(mainBody).scrollLeft(mainBody.scrollLeft-distance);
                    if(direct == "y") $(mainBody).scrollTop(mainBody.scrollTop-distance);
                    //当距离小于一定值时，忽略不计，停止惯性滚动
                    if(Math.abs(distance)<=0.001) clearInterval(time);
                },15);
                break;
            case "touchmove":
                betweenTime=new Date().getTime()-lasttouchtime;
                lasttouchtime=new Date().getTime();
                differ_x=event.changedTouches[0].clientX-lastmove_clientX;
                differ_y=event.changedTouches[0].clientY-lastmove_clientY;
                if(isFirstTouch){
                    direct=Math.abs(differ_y)>Math.abs(differ_x)?"y":"x";
                    isFirstTouch=false;
                }
                //console.log("Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY  +","+differ_x+","+differ_y+")");
                if(direct == "x") $(mainBody).scrollLeft(mainBody.scrollLeft-differ_x);
                if(direct == "y") $(mainBody).scrollTop(mainBody.scrollTop-differ_y);
                lastmove_clientX=event.touches[0].clientX;
                lastmove_clientY=event.touches[0].clientY;
                break;
        }
    }

    //固定表头 联合滚动
    $(mainBody).scroll(function(){
        $(".fixedRow").scrollLeft(this.scrollLeft);
        $(".fixedCol").scrollTop(this.scrollTop);
    });
    return mainBody;
}



//创建固定行
Mytable.prototype._createfixed_row = function () {
    var fixedRow = document.createElement("div");
    tool.addClass(fixedRow,"fixedRow");
    return fixedRow;
}

//创建固定行
Mytable.prototype._createfixed_col = function () {
    var fixedCol = document.createElement("div");
    tool.addClass(fixedCol,"fixedCol");
    return fixedCol;
}



Mytable.prototype._cloneRow = function(el){
    var tr = $(el).clone();
    //设置单元格的宽高
    var td_divs =  $(tr).find("td>div");
    var tds =  $(tr).find("td");
    for(var i=0;i<td_divs.length;i++){
        var td_div = td_divs[i];
        var td = tds[i];
        $(td_div).css("width",$(el).find("td>div")[i].offsetWidth+"px");
        $(td_div).css("height",$(el).find("td>div")[i].offsetHeight+"px");
        $(td).attr("cid","");
    }
    return tr;
}

//创建固定行
Mytable.prototype._cloneRows = function (el,num) {
    var self =this;
    num = num?num:1;

    //创建各种容器  div和table、tbody
    var fixedRow = document.createElement("div");
    var table = document.createElement("table");
    tool.addClass(table,"table");
    tool.addClass(table,"table-bordered");
    table.style.marginBottom=0;
    var tbody =  document.createElement("tbody");
    function cloneRowData(currentTr,num){
        var tr = self._cloneRow(currentTr);
        tbody.appendChild(tr[0]);
        if(--num>0) cloneRowData($(currentTr)[0].nextSibling,num);
    }
    cloneRowData(el,num);

    table.appendChild(tbody);
    //$(arr_th_new[i]).html("<div style='width:"+arr_th[i].offsetWidth+"px;height: "+head.height()+"px'>"+$(arr_th[i]).html()+"</div>")
    fixedRow.appendChild(table);
    return fixedRow;
}

//固定行
Mytable.prototype.fixRow = function(rowIndex,num){
    this.fixed_rows.push(rowIndex);
    var div = this._cloneRows($("#_MY_ROW_"+rowIndex),num);
    console.log(div)
    $(".fixedRow").html(div)
}



Mytable.prototype._cloneCol = function(el){
    var tr = $(el).clone();
    //设置单元格的宽高
    var td_divs =  $(tr).find("td>div");
    var tds =  $(tr).find("td");
    for(var i=0;i<td_divs.length;i++){
        var td_div = td_divs[i];
        var td = tds[i];
        $(td_div).css("width",$(el).find("td>div")[i].offsetWidth+"px");
        $(td_div).css("height",$(el).find("td>div")[i].offsetHeight+"px");
        $(td).attr("cid","");
    }
    return tr;
}

//创建固定列
Mytable.prototype._cloneCol = function (el,num) {
    var self =this;
    num = num?num:1;

    //创建各种容器  div和table、tbody
    var fixedRow = document.createElement("div");
    //fixedRow.setAttribute("overflow-x","scroll");
    //fixedRow.setAttribute("overflow-y","hidden");
    var table = document.createElement("table");
    tool.addClass(table,"table");
    tool.addClass(table,"table-bordered");
    table.style.marginBottom=0;
    var tbody =  document.createElement("tbody");


    function cloneRowData(currentTr,num){
        var tr = self._cloneRow(currentTr);
        tbody.appendChild(tr[0]);
        if(--num>0) cloneRowData($(currentTr)[0].nextSibling,num);
    }
    cloneRowData(el,num);

    table.appendChild(tbody);
    //$(arr_th_new[i]).html("<div style='width:"+arr_th[i].offsetWidth+"px;height: "+head.height()+"px'>"+$(arr_th[i]).html()+"</div>")
    fixedRow.appendChild(table);
    return fixedRow;
}

//固定列
Mytable.prototype.fixCol = function(rowIndex,num){
    this.fixed_rows.push(rowIndex);
    var div = this._cloneRows($("#_MY_ROW_"+rowIndex),num);
    console.log(div)
    $(".fixedRow").html(div)
}




Mytable.prototype.init = function () {


}


module.exports = Mytable;