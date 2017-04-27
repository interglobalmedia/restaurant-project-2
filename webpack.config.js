const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './app/assets/scripts/app.js',
		vendor: './app/assets/scripts/vendor.js'
	},
	output: {
		path: path.resolve(__dirname, 'app/temp/scripts'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-1']
					}
				},
				exclude: /node_modules/
			},
		]
	},
};
