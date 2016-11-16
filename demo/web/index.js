(function() {
	var latte_web_zSchema = require("latte_web_zSchema")
	this.get = [latte_web_zSchema({
		type: "object",
		properties: {
            a: { type: "int" },
            b: { type: "string" }
        }
	}),function(req, res) {
		res.send("hello");
	}];
	this.path = "/test";
}).call(module.exports);