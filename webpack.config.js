var webpack = require("webpack");
var path = require("path");

var SRC_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "dist");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app"
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
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
            // In case you imported plugins individually, you must also require them here:
            //Util: "exports-loader?Util!bootstrap/js/dist/util",
            //Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        })
    ]    

}

module.exports = config;
