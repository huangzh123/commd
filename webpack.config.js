var path=require("path");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var webpack=require("webpack");



var ROOT_PATH=path.resolve(__dirname);
var SRC_PATH=path.resolve(ROOT_PATH,"src");
var ENTRY_PATH=path.resolve(SRC_PATH,"main");
var DEST_PATH=path.resolve(ROOT_PATH,"./dist/");

module.exports={
    entry:ENTRY_PATH,
    output:{
        path: DEST_PATH,
        filename: 'build.js',
        publicPath: "/dist/",
        //publicPath: "/app/t2/dist/",//正式打包
        chunkFilename:"[id].build.js?[chunkhash]"
        //chunkFilename:"build.js?"
    },
    module:{
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", 'css-loader?sourceMap!less-loader!cssnext-loader')
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader?sourceMap!cssnext-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        },{
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    plugins:[
        //将公共模块提取成common.js
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        //将所有的css文件，合并成style.css
        new ExtractTextPlugin("style.css",{
            allChunks: true,
            disable: false
        }),
        //创建html文件
        //new HtmtWebpackPlugin({
        //        title:"html标题",
        //        filename:"index.html",
        //        inject:"body",
        //        template:"./src/index.html"
        //})
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js','.vue'],
        //别名
        alias: {
            filter: path.join(__dirname, 'src/filters')
        }
    },
    devtool: '#source-map',
    //部署web服务
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        stats:{colors:true},
        proxy: {
            "/api": {
                "target": {
                    "host": "172.22.12.167",
                    //"host": "172.22.203.65",
                    "protocol": 'http:',
                    "port": 8088
                },
                pathRewrite: {'^/api' : ''},
                secure: false
            },
            "/node": {
                "target": {
                    "host": "172.22.12.167",
                    "protocol": 'http:',
                    "port": 4000
                },
                pathRewrite: {'^/node' : ''},
                secure: false
            }
        }
    }
}

