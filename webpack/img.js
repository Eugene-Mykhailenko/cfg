

module.exports = (paths) => {
    return ({
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }
            ]
        }
    })
}