var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "dist");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
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
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]  
            },
/*            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
*/            
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
        new ExtractTextPlugin({
            filename: "app.css",
            disable: true,
            allChunks: true
        })
    ]    

}

module.exports = config;
