module.exports = {
    resolve: {
        root: __dirname,
            extensions: ['', '.js', '.ts']
        },
    module: {
        resolveLoader: {
            modulesDirectories: ['node_modules']
        },
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'ignore' }
        ]
    }
};

