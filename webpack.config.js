// @ts-check
/** @typedef {import('webpack').Configuration} Configuration */

const path = require('path');

/** @type Configuration */
module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    }
}
