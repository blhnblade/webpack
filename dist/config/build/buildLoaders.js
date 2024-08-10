import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var mode = options.mode;
    var isDev = mode === 'development';
    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }
    var tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ],
        exclude: /node_modules/,
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
    };
    var assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var svgLoader = {
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
    };
    return [tsLoader, scssLoader, assetsLoader, svgLoader];
}
