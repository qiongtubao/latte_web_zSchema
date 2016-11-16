var config = {
	port: 8080,
	web: {
		loadPath: "./web"
	}
};
var Server = require("latte_webServer4");
var server = new Server(config);
process.latte = server;
server.run();