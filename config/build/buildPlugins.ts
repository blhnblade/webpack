import webpack, { DefinePlugin } from "webpack"
import { Configuration } from "webpack"
import HTMLWebpackPlugin from  'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildOptions } from "./types/types"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from "path"
import CopyPlugin from 'copy-webpack-plugin'

export function buildPlugins(options: BuildOptions): Configuration['plugins']{
    const { mode, paths, platform } = options;
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HTMLWebpackPlugin({
            template: paths.html,
            inject: 'body',
            favicon: path.resolve(paths.public, 'favicon.ico')
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new ForkTsCheckerWebpackPlugin()
    ]

    if(isDev){
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if(isProd){
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
        plugins.push(new CopyPlugin({
            patterns: [
                { from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') },
            ]
        }))
    }

    return plugins
}