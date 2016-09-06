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
 * 实现$.hasClass
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

module.exports = function(){
    return new Tool();
};

