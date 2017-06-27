var htmlWebpackPackPlugin = require('html-webpack-plugin');//引入webpackhtml插件

module.exports = {
	//entry:['./src/script/main.js','./src/script/a.js'] ,//打包入口文件
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js'
	},
	output:{
		//path: __dirname + "/dist/js",	//打包后文件
		path: __dirname + '/dist',
		//filename:'bundle.js'//打包后文件名
		//filename:'[name]-[hash].js'
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://c345644dn.com/'
	},
	plugins: [
		// new htmlWebpackPackPlugin()
		//与模版建立联系
		new htmlWebpackPackPlugin({
			template:'index.html',
			//给index的名字加hash值
			filename:'index.html',
			inject:'false',
			title:'webpack is good',
			date:new Date(),
			minify: {
				removeComments:false,
				collapseWhitespace:false
			}

		})
	]

} //common 模块化