var path=require("path");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var HtmtWebpackPlugin = require("html-webpack-plugin");
var webpack=require("webpack");



var ROOT_PATH=path.resolve(__dirname);
var SRC_PATH=path.resolve(ROOT_PATH,"./src/");
var ENTRY_PATH=path.resolve(SRC_PATH,"main.js");
var DEST_PATH=path.resolve(ROOT_PATH,"./dist");

module.exports={
    entry:ENTRY_PATH,
    output:{
        path:DEST_PATH,
        filename:"build.js"
    },
    module:{
      loaders:[
          //{test:/\.vue$/,loader:"vue-loader"},
          {test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader")},
          {test:/\.scss$/,loader:ExtractTextPlugin.extract("style-loader","css-loader?sourceMap!sass-loader!cssnext-loader")},
          {test: /\.(jpg|png|gif)$/,loader: "file-loader?name=images/[hash].[ext]"}
      ]
    },
    plugins:[
        //将所有的css文件，合并成style.css
        new ExtractTextPlugin("style.css",{allChunks:true}),
        //将公共文件提取成common.js
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        //创建html文件
        new HtmtWebpackPlugin({
                title:"html标题",
                filename:"index.html",
                inject:"body",
                template:"./src/index.html"
        })
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
    },
    //部署web服务
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
}