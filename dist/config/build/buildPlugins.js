import webpack, { DefinePlugin } from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildPlugins(options) {
    var mode = options.mode, paths = options.paths, platform = options.platform;
    var isDev = mode === 'development';
    var isProd = mode === 'production';
    var plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
            inject: 'body',
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __IS_DEV__: JSON.stringify(isDev)
        })
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }));
    }
    return plugins;
}
