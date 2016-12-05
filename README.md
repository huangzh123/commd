commd
=========
项目目录结构如下：

--commd  前端公共模块
    |----src
          |----component（组件库）
                    |------checkbox(多选框)
                    |------select(下拉框)
                    |------search(搜索框)
                    |------...
          |----libs（工具函数）
                    |------ajax(Ajax请求封装)
                    |------date(日期相关工具函数)
                    |------others(其他工具函数)
                    |------...
          |----view（视图）
          |----theme（主题库）
                    |------blue(蓝色)
                    |------yellow(黄色)
                    |------theme.scss(主题入口文件)
                    |------...

快速开始：

    下载依赖库：
                        npm install

    webpack 打包 :
                        webpack

    运行后，会在主目录生成一个打包后的文件夹dist，将主目录的dist、index.html、plugin拷贝到指定的WEB静态服务器上,

    打开浏览器,访问该项目所部属的服务地址即可。


其他：

    如果想快速在本地测试访问web，试试下面命令：

            npm start

    打开浏览器,访问：http://127.0.0.1:5000


注意：
1、当使用webpack命令打包时，请确保/webpack.config.js文件，publicPath配置的路径，与打包后所在的层级路径一致
2、如需修改服务IP地址，请修改在/src/config.js 的 Config.serverIP 的值（/api  是本地测试时代理转发的请求入口地址）
3、当本地测试时，涉及到跨域等问题，需要使用代理时，可以修改/webpack.config.js文件里devServer.proxy 配置代理服务器





