var webpack = require('webpack');
var config = require('./webpack.config.js');

config.plugins=(config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env':{
            NONE_ENV:'"production"'
        }
    }),

    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports', 'require']
            //以上变量‘$super’, ‘$’, ‘exports’ or ‘require’，不会被混淆
        },
        compress: {
            warnings: false
        }
    })
])

module.exports=config;