const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: { main: './src/index.js'},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].min.js'
	},
	module: {
		rules: [
			{
			test: /\.js$/,
			exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
	        	test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: "file-loader",
        	},
        	{
			test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            //  name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
        	},
		],
		
	},
	plugins: [
		new webpack.ProvidePlugin({
		    $: 'jquery',
		    jQuery: 'jquery',
		    'window.jQuery': 'jquery'
		}),
		new CopyWebpackPlugin([
			{ from: 'static/img/*.*'},
		]),
		new CleanWebpackPlugin('dist', {} ),
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
    	}),
    	new WebpackMd5Hash(),
		new UglifyJsPlugin()
	]
}	