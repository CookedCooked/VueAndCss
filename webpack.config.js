var path = require('path');

module.exports = {
    //entry: path.resolve(__dirname, 'public/javascripts/index/index.js'),
    entry:{
        "fix-screen": path.resolve(__dirname, 'public/javascripts/utils/fix-screen.js'),
        "index":path.resolve(__dirname, 'public/javascripts/index/index.js')
    },    output: {
        path: "./public/javascripts/build",
        publicPath: "/public/javascripts/build",
        filename: "[name].build.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "vue-html-loader"
            },
            {
                test: /\.sass$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.gif/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/gif"
            },
            {
                test: /\.jpg/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/jpg"
            },
            {
                test: /\.png/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/png"
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        alias: {
            constant: __dirname+ "/routes/constant",
            pages: __dirname+ "/views",
            lib: __dirname+ "/public/javascripts/lib",
        }
    }
}