'use strict';

let path = require('path');
const { DefinePlugin } = require('webpack'); 
module.exports = {
	mode: 'development',
	entry: './js/script.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/js',
	},
	watch: true,

	devtool: 'source-map',

	module: {},
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'process.env.IP_ADDRESS': JSON.stringify(''), //  Добавьте поле для IP
		}),
	]
};
