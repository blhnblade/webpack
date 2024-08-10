export function buildResolvers(options) {
    var paths = options.paths;
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': [paths.src]
        }
    };
}
