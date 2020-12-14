const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename:'bundle.min.js'
    },
    module:{
        rule:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png|gif)$/i,use:{
                loader:'url-loader',
                options:{
                    outputPath:'img/',
                    limit:1024*100
                }
            }},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {
                test:/\.jsx?/i,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}