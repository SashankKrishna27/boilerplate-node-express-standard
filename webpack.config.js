const path = require('path')
const nodeExternals = require('webpack-node-externals')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin')

console.log(process.env.NODE_ENV)

module.exports = {
    context: __dirname,
    mode: process.env.NODE_ENV || 'production',
    entry: './src/index.js',
    devtool: process.env.NODE_ENV === 'production' ? false : 'eval',
    resolve: {
        extensions: ['*', '.mjs', '.json', '.ts', '.js'],
        symlinks: false,
        cacheWithContext: false,
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'build'),
        filename: 'output.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader',
                exclude: [
                    [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, '.serverless'),
                        path.resolve(__dirname, 'build'),
                    ],
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new NodemonPlugin(),
        // new ForkTsCheckerWebpackPlugin({
        //   eslint: true,
        //   eslintOptions: {
        //     cache: true
        //   }
        // })
    ],
}
