

module.exports = (paths) => {
    return ({
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg|svg|mov|mp4)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }
            ]
        }
    })
}