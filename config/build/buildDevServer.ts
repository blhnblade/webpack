import { Configuration as DevServerConfigurate } from 'webpack-dev-server'
import { BuildOptions } from './types/types'

export function buildDevServer(options: BuildOptions): DevServerConfigurate{
    return {
        port: options.port,
        // open: true,
        historyApiFallback: true,
        hot: true
    }
}