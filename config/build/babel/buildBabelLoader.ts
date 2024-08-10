import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader (options: BuildOptions) {
    let { mode } = options;
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins = [];

    if(isProd){
        plugins.push([removeDataTestIdBabelPlugin, {props: ['data-testid']}])
    }

    return {
        test: /\.tsx?$/,
        use: {
            loader: "babel-loader",
            options: {
                "presets": [
                    "@babel/preset-env", 
                    "@babel/preset-typescript",
                    "@babel/preset-react"
                ],
                plugins,
            }
        },
        exclude: /node_modules/
      }
}