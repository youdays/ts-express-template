const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development', // 本番では'production'
    entry: './src/server.ts',
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'inline-source-map', // 本番ではなくしたほうがいい
    module: {
        rules: [
            {
                enforce: 'pre',
                loader: 'tslint-loader',
                test: /\.ts$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    emitErrors: true
                }
            },
            {
                loader: 'ts-loader',
                test: /\.ts$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    configFile: 'tsconfig.json'
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    }
};
