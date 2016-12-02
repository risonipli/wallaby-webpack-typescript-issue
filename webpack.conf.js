module.exports = {
    module: {
        resolve: {
            root: __dirname,
            extensions: ['', '.js', '.ts']
        },
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

