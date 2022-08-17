const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    devtool: 'inline-source-map',
    devServer:{
        port:3002,
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true,
    }
}