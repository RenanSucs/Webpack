const path = require('path');

module.exports = {
    entry: './app-src/app.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(_dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exlude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}