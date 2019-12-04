const webpack = require('webpack')
const path = require('path');

const appDirectory = path.resolve(__dirname, '../')


const babelLoaderConfiguration = {
    test: /(\.jsx|\.js)$/,
    include: [
        path.resolve(appDirectory, 'src'),
        path.resolve(appDirectory, 'index.web.js'),
    ],
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: false,
            presets: ["@babel/preset-env", "@babel/preset-react", "module:metro-react-native-babel-preset"]
        },
    },
}
const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
            // limit:1,
            // name: '/imgs/[name].[ext]',
        },
    },
}

const htmlLoaderConfiguration = {
    test: /\.html$/,
    use: {
        loader: 'html-loader'
    }
}

const cssLoaderConfiguration = {
    test: /\.css|\.less$/,
    use: ['style-loader',
        'css-loader'],
}

module.exports = {
    mode: 'development',
    entry: path.resolve(appDirectory, 'index.web.js'),
    devtool: 'eval-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(appDirectory, './web/public'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        inline: true,
        hot: true,
        progress: true,
    },

    module: {
        rules: [
            babelLoaderConfiguration,
            cssLoaderConfiguration,
            imageLoaderConfiguration,
            htmlLoaderConfiguration,
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        
    ],
    resolve: {
        extensions: ['.web.js', '.js'],
        alias: {
            'react-native$': 'react-native-web',
        },
    },
      
}