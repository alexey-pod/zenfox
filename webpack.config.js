const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let version = 'dev';

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].${  version  }.js`,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
        ],
    },
    devServer: {
        writeToDisk: true,
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vuesrc: path.resolve(__dirname, './src'),
            vue: 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `[name].${  version  }.css`,
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};

module.exports = config;
