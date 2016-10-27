"use strict";

/**
 * 通用工具类
 * @constructor
 */
function Tool() {

};

/**
 * 复制对象
 * @param oldObj
 * @returns {*}
 */
Tool.prototype.cloneObj = function (oldObj) {
    var self = this;
    if (typeof(oldObj) != 'object' || oldObj == null || oldObj instanceof HTMLElement) return oldObj;
    var newObj;
    if(oldObj.length){
        newObj=new Array();
    }else{
        newObj=new Object();
    }
    for (var i in oldObj) newObj[i] = self.cloneObj(oldObj[i]);
    return newObj;
}

/**
 * 实现 $.entend 的功能的函数
 * @returns {*}
 */
Tool.prototype.extend = function () {
    var self = this;
    var args = [];
    args = arguments;
    if (args.length < 2) return;
    var temp = self.cloneObj(args[0]); //调用复制对象方法
    for (var n = 1; n < args.length; n++) {
        for (var i in args[n]) {
            temp[i] = self.cloneObj(args[n][i]);
        }
    }
    return temp;
}

/**
 * 将html转化成dom对象
 * @param arg
 * @returns {NodeList}
 */
Tool.prototype.parseDom = function (arg) {
    var objE = document.createElement("div");
    objE.innerHTML = arg;
    return objE.childNodes;
};

/**
 * 实现$.hasClass
 * @param obj
 * @param cls
 * @returns {Array|{index: number, input: string}}
 */
Tool.prototype.hasClass = function (obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

/**
 * 实现$.addClass
 * @param obj
 * @param cls
 */
Tool.prototype.addClass = function (obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

/**
 * 实现$.removeClass
 * @param obj
 * @param cls
 */
Tool.prototype.removeClass = function (obj, cls) {
    if (this.hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

/**
 * 实现$.toggleClass
 * @param obj
 * @param cls
 */
Tool.prototype.toggleClass = function (obj, cls) {
    if (this.hasClass(obj, cls)) {
        this.removeClass(obj, cls);
    } else {
        this.addClass(obj, cls);
    }
}

/**
 * 实现$.siblingElem
 * @param o
 * @returns {Array}
 */
Tool.prototype.sibling = function(o){
    var a=[];//定义一个数组，用来存o的兄弟元素
    var p=o.previousSibling;
    while(p){//先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 p表示previousSibling
        if(p.nodeType===1){
            a.push(p);
        }
        p=p.previousSibling//最后把上一个节点赋给p
    }
    a.reverse()//把顺序反转一下 这样元素的顺序就是按先后的了
    var n=o.nextSibling;//再取o的弟弟
    while(n){//判断有没有下一个弟弟结点 n是nextSibling的意思
        if(n.nodeType===1){
            a.push(n);
        }
        n=n.nextSibling;
    }
//for(var i=0;i<a.length;i++){
//   a[i].style.fontSize=”12px”;
//  a[i].style.background=”#fff”;
// }
    return a//最后按从老大到老小的顺序，把这一组元素返回
}

/**
 * 生成uuid并返回
 * @returns {string}
 */
Tool.prototype.getUuid = function(){
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}

/**
 * 获取滚动条距顶部的距离
 * @returns {*}
 */
Tool.prototype.getScrollTop = function(el) {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset; }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    { scrollPos = document.documentElement.scrollTop; }
    else if (document.body) { scrollPos = document.body.scrollTop; }
    return scrollPos;
}

/**
 * 截取字符串（某个字符后面的）
 * @param str
 * @param key
 * @returns {string|*}
 */
Tool.prototype.cutstrAfterKey=function(str,key){
    var index = str.indexOf(key);
    var result = str.substr(index,str.length);
    return result;
}

/**
 * 获取当前url参数
 * @returns {Object}
 */
Tool.prototype.getRequestparam =function() {
    //var url = location.search; //获取url中"?"符后的字串
    var url=this.cutstrAfterKey(location.href,"?");
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/**
 *判断字符串在数组中的位置
 * @param arr
 * @param str
 * @returns {*}
 */
Tool.prototype.indexOf=function(arr, str){
    // 如果可以的话，调用原生方法
    if(arr && arr.indexOf){
        return arr.indexOf(str);
    }
    var len = arr.length;
    for(var i = 0; i < len; i++){
        // 定位该元素位置
        if(arr[i] == str){
            return i;
        }
    }
    // 数组中不存在该元素
    return -1;
}

/**
 * 将json对象按一定顺序转化成数组（绑定表格数据时需要）
 * @param arr key数组   ["name","age","sex"]
 * @param obj           {sex:'m',name:'Jon',age:15}
 * @returns {Array}     ['Jon',15,'m']
 */
Tool.prototype.changObjToSortarray = function(arr,obj){
    var self = this;
    var newDatas=new Array(arr.length);
    for(var key in obj){
        var index=self.indexOf(arr,key);
        if(index != -1) newDatas[index]=obj[key];
    }
    return newDatas;
}

/**
 * 图片上传
 * @param url
 * @param success
 * @param fali
 * @param process
 */
Tool.prototype.uploadImg = function (e,url,success,fali,process) {
    var file = e.target.files||e.dataTransfer.files;
    if(file && file[0]){
        var extStart=file[0].name.lastIndexOf(".");
        var ext=file[0].name.substring(extStart,file[0].name.length).toUpperCase();
        if(ext!=".BMP"&&ext!=".PNG"&&ext!=".GIF"&&ext!=".JPG"&&ext!=".JPEG"&&ext!=".BMP") return $.alert("请选择jpg/png/jpeg/gif/bmp格式的文件！");
        //图片上传
        var formData = new FormData();
        formData.append("uploadedFile",file[0]);
        //XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open("post",url, true);
        xhr.onload = function (event) {
            if (xhr.status == 200) {
                //上传成功
            } else {
                if(fail) fali("上传失败，错误码：" + xhr.status);
                $.alert("上传失败，错误码：" + xhr.status);
            };
        }
        xhr.onreadystatechange = function (){
            if(xhr.readyState == 4 && xhr.status == 200){
                var response=xhr.responseText;
                if(typeof  response=="string") response=JSON.parse(response);
                console.log(response)
                if(response.successful==true){
                    //$("#"+param.funCode+"__"+param.attrCode).next().html("<img uid='"+response.fileName+"' onerror=\"this.src='img/default-img.png'\" src='"+CONFIG.requrl.imgGet+"?_app="+appCode+"&_file="+response.fileName+"'>");
                    success(response.fileName)
                }

            }
        }
        xhr.addEventListener("progress",function uploadProgress(evt){
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            if(process) process(percentComplete);
        },false);
        xhr.send(formData);
    }
}


module.exports = function(){
    return new Tool();
};

