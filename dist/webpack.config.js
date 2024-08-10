import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
export default (function (env) {
    var _a, _b, _c;
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    var config = buildWebpack({
        paths: paths,
        mode: (_a = env.mode) !== null && _a !== void 0 ? _a : 'development',
        port: (_b = env.port) !== null && _b !== void 0 ? _b : 3000,
        platform: (_c = env.platform) !== null && _c !== void 0 ? _c : 'desktop'
    });
    return config;
});
