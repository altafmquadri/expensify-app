const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production'
    console.log(env);
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.s?css$/,
                use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 
                {
                    loader: 'css-loader', 
                    options: {
                        sourceMap: true
                    } 
                }, 
                {
                    loader: 'sass-loader', 
                    options: {
                        sourceMap: true
                    }
                }]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            port: 3000
        },
        plugins: [new HtmlWebpackPlugin({
            template: './src/index.html'
        }), new MiniCssExtractPlugin({
            filename: 'styles.css'
        })]
    }
}

