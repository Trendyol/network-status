const path = require('path');
module.exports = {
   entry: "./src/network.handler.ts",
   output: {
       filename: "network.js",
       path: path.resolve(__dirname, 'dist')
   },
   resolve: {
       extensions: [".webpack.js", ".web.js", ".ts", ".js"]
   },
   module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
   }
}