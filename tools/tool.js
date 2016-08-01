/**
 * Created by Administrator on 2016/7/29.
 */
"use strict";

/**
 * 通用工具类
 * @constructor
 */
function  Tool(){

};


Tool.prototype.extend=function(){
    var o1={hello:1,old:555},
        o2 = {
            abc: 55555555,
            hello: 2,
            fun: function() {
                alert(111);
            }
        },
        o3={third:9999};
    function cloneObj(oldObj) { //复制对象方法
        if (typeof(oldObj) != 'object') return oldObj;
        if (oldObj == null) return oldObj;
        var newObj = new Object();
        for (var i in oldObj)
            newObj[i] = cloneObj(oldObj[i]);
        return newObj;
    };
    function extendObj() { //扩展对象
        var args = arguments;
        if (args.length < 2) return;
        var temp = cloneObj(args[0]); //调用复制对象方法
        for (var n = 1; n < args.length; n++) {
            for (var i in args[n]) {
                temp[i] = args[n][i];
            }
        }
        return temp;
    }
    var t=extendObj(o1,o2,o3);
    console.log(t);
    console.log(o1);
    console.log(o2);
    console.log(o3);
}

Tool.extend();