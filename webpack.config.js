var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "dist");

var isProd = process.env.NODE_ENV === "production";

var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({    
    fallback: "style-loader",
    use: [
        {
            loader: "css-loader"
        },
        {
            loader: "sass-loader"
        }
    ]
});

var cssConfig = isProd ? cssProd : cssDev;


var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.[hash].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: [
                    SRC_DIR
                ],
                exclude: [
                    /node_modules/
                ],
                loader: "babel-loader",
                options: {
                    presets: [
                        ["react"], 
                        ["es2015", { modules: false }],  // Enable tree-shaking
                        ["stage-2"] 
                    ]
                }
            },
            {
                test: /\.(scss|css)$/, 
                use: cssConfig
            },
            {
                test: /\.(gif|jpg|png|svg)$/, 
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ] 
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                        {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            publicPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Code Zen Blog',
            template: SRC_DIR + '/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
            minify: {
                collapseWhitespace: true
            },
            hash: true
          }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
            // In case you imported plugins individually, you must also require them here:
            //Util: "exports-loader?Util!bootstrap/js/dist/util",
            //Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        }),
        new ExtractTextPlugin({     // Generate separate .css and not added to bundle.js
            filename: "app.[contenthash].css",
            disable: !isProd,
            allChunks: true
        })
    ]    

}

module.exports = config;
