<template>
    <div id="example"></div>
</template>
<style>
    #example{
        overflow: hidden;
    }
</style>
<script>
    var config = require("../../config")();
    var vueResource = require("vue-resource");
    var Softcan = require("../../sc/softcan");
    export default{
        data(){
            return{

            }
        },
        route: {
            data:function(transition){
                transition.next();
            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        },
        components:{
        },
        ready(){
            var data=[
                ["月份","编号","水费","水公摊费用","电费","电公摊费","物业费","宽带费"],
                ["1月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["2月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["3月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["4月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["5月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["6月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["7月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["8月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["9月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["10月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["11月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["12月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["1月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["2月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["3月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["4月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["5月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["6月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["7月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["8月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["9月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["10月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["11月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["12月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["1月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["2月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["3月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["4月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["5月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["6月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["7月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["8月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["9月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["10月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["11月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
                ["12月","0100456","80.00","20.00","200.00","50.00","160.00","45.00"],
            ]
            var hot = new Handsontable(
                    //容器
                    document.getElementById('example'),
                    //参数变量
                    {
                        //数据源
                        //data: Handsontable.helper.createSpreadsheetData(100, 100),
                        data: data,
                        //整体宽度
                        //width: 584,
                        //整体高度
//                        height: 320,
                        //列宽
                        //colWidths: 47,
                        //行高
                        //rowHeights: 23,
                        //显示行表头
//                        rowHeaders: true,
                        //显示列表头
//                        colHeaders: true,
                        //下拉菜单
                        //dropdownMenu: true,
                        //固定行
                        fixedRowsTop: 1,
                        //固定列
                        fixedColumnsLeft: 1,
                        //关闭虚拟渲染
                        renderAllRows:true,
//                        preventOverflow: 'horizontal',
//                        bindRowsWithHeaders: true,
                        fillHandle:false,
                    });

//            var startPos = 0,endPos = 0,scrollStatus = 0,isScrolling=0;
//            document.addEventListener('touchstart',function(event){
//                console.log('touchstart')
//                var touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
//                startPos = {x:touch.pageX,y:touch.pageY,time:+new Date}; //取第一个touch的坐标值
//                scrollStatus = 0; //这个参数判断是垂直滚动还是水平滚动
//            }, false);
//
//            //解绑事件 web前端开发
//            document.addEventListener('touchend',function(event){
//                console.log('touchend')
////                document.removeEventListener('touchmove',this,false);
////                document.removeEventListener('touchend',this,false);
//            }, false);
//
//            document.addEventListener('touchmove',function(event){
//                console.log(event)
////                //当屏幕有多个touch或者页面被缩放过，就不执行move操作
//                if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
//                var touch = event.targetTouches[0];
//                endPos = {x:touch.pageX - startPos.x,y:touch.pageY - startPos.y};
//                scrollStatus = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1:0; //scrollStatus为1时，表示纵向滑动，0为横向滑动
//                if(scrollStatus === 1){
//                    event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
//                }
//            }, false);
        }
    }
</script>
