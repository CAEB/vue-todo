const webpack = require('webpack')

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: "eval-source-map",
    entry: __dirname + "/src/index.js",
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            // vue 
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            // js
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: "/node_modules/"
            },
            // css
            {
                test: /\.(less|css)$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            // file
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }

        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权归EB所有,翻版必究')
    ],
    // 本地服务器
    devServer: {
        port: '8000',
        inline: true,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
}
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            //  sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}