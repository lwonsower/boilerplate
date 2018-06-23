const express 	= require('express');
const webpack 	= require('webpack');
const config 		= require('../../webpack.config');
const path      = require('path');

const app 			= express();
const compiler  = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
// 	noInfo: true,
// 	publicPath: config.output.publicPath,
// }));

const staticAssetsPath = path.resolve(__dirname, "build");
app.use(express.static(staticAssetsPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../dist/index.html'))
});

app.listen(3000, 'localhost', (err) => {
	if (err) {
		return console.log(err);
	}
	console.log('Listening on port 3000');
});
