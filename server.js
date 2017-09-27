const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.devconfig');
const compiler = webpack(config);

const express = require('express');
const app = express();
const port = 3000;

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.listen(port, () => {
    console.log('Live on port ' + port);
})

app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});
