const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css!csscomb' },
        ],
        rules: [
            {
                test: /\.js$/,
                loader: ['react-hot-loader/webpack', 'babel-loader'],
                exclude: '/node_modules/',
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?outputPath=images/',
                ],
            },
        ],
    },
    resolve: {
        modules: ['./src', './node_modules'],
        extensions: ['.js', '.scss'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new ExtractTextPlugin('styles.css'),
    ],
};
