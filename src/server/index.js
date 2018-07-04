const express 	= require("express");
const webpack 	= require("webpack");
const config 		= require("../../webpack.config");
const path      = require("path");

const app 			= express();
const compiler  = webpack(config);
const port      = 3000;
const dist      = path.join(__dirname, "../../dist");

app.use(express.static(dist));

app.get("*", (req, res) => {
	res.sendFile(path.join(dist, "index.html"))
});

app.listen(port, "localhost", (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Listening on port ${port}`);
});
