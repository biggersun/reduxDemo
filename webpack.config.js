var path = require('path')
var webpack = require('webpack');

config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./index.js',
	],
	output: {
		path: path.resolve(__dirname,"build"),
    publicPath:"/dist/",
    filename:"bundle.js"
	},
	devServer:{
		inline:true,
		hot:true
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style!css"
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loader: 'url?limit=25000!img?progressive=true'
		}, {
			test: /\.woff$/,
			loader: 'url?limit=100000'
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'stage-0']
			}
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
module.exports = config;