var HTMLWebpackPlugin = require('html-webpack-plugin');    
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({ 
   template: __dirname + 'index.html',    
   filename: 'index.html',    
   inject: 'body'    
}); 

module.exports = { 
   entry: __dirname + 'index.ts',    
   output: { 
      filename: 'webpackbundle.js',    
      path: __dirname + '/build'  
   }, 
   module: { 
      rules: [ 
          { 
             test: /.ts$/, 
             exclude: /node_modules/, 
             use : { 
                loader: 'babel-loader',    
                options: { 
                   presets: [ '@babel/preset-typescript' ]  
                } 
             } 
          } 
      ] 
   }, 
   plugins: [HTMLWebpackPluginConfig] 
}; 