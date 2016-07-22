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
				loaders: ['vue']
			}, {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			}, {
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=81920&name=./img/[name].[ext]'
			},
			/*{
                //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                test: /\.html$/,
                loader: "html?attrs=img:src img:data-src"
            },*/
			{
				//文件加载器，处理文件静态资源
				test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=./fonts/[name].[ext]'
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			}
		],
		plugins: [
			//暴露全局变量
			new webpack.ProvidePlugin({
				Vue: 'vue'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common', //公共模块名称
				filename:'common.js'
			}),
			new ExtractTextPlugin('css/[name].css'), //提取css到单独文件使用link引入
			new webpack.HotModuleReplacementPlugin() //热加载
		]
	}
};