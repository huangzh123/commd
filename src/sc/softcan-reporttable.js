/**
 * Created by Administrator on 2016/9/9.
 */
"use strict";

var tool =require("../libs/tool")();
var config = require("../config")();

function SoftcanReportTable(){

}

SoftcanReportTable.prototype.exchangeTable = function(rows){
    for(var i=0;i<rows.length;i++){
        var row = rows[i];
        for(var m=0;m<row.length;m++){
            if(!row[m]) continue;
            row[m]["name"] = row[m]["d"];
            row[m]["value"] = row[m]["v"];
        }
    }
    return rows;
}


module.exports = SoftcanReportTable;