var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        './index.js',
        require.resolve('react-dev-utils/webpackHotDevClient'),
    ],
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: __dirname
    }
}