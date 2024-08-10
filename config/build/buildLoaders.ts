import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules']{
    const {mode} = options
    const isDev = mode === 'development';

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }
    
    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean)   
                    }),
                    transpileOnly: isDev
                }
            }
        ],
        exclude: /node_modules/,
    }

    const babelLoader = buildBabelLoader(options);

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
            'css-loader', 
            'sass-loader'
        ],
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                }
            }
        ],
    }

    return [
        // tsLoader,
        babelLoader, 
        scssLoader, 
        assetsLoader, 
        svgLoader
    ]
}