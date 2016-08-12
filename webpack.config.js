var path = require('path');
var webpack = require('webpack');

//css提取插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: { //入口配置文件
        main: ['./src/js/main.js'],
        backmain: ['./src/js/backmain.js']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '../',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loaders: ['vue-loader']
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=81920&name=./img/[name].[ext]'
        }, {
            //文件加载器，处理文件静态资源
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=./fonts/[name].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }
        ]
    },
    plugins: [
        //暴露全局变量
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', //公共模块名称
            filename: 'js/common.js'
        }),
        new ExtractTextPlugin('css/[name].css'), //提取css到单独文件使用link引入
        new webpack.HotModuleReplacementPlugin() //热加载
    ]

};