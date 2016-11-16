var zSchema = require("z-schema");
var latte_lib = require("latte_lib")
module.exports = function(dataObject, opts) {
	return function(req, res, next) {
		var z = new zSchema(opts);
		var json = latte_lib.merger(req.gets, req.post)
		//console.log("???");
		z.validate(json, dataObject, function(err, result) {
			if(err ) {

				if(latte_lib.isArray(err)) {
					next(err[0]);
				}else{
					next(err);
				}
			}else{
				next(null, result);
			}


		});
		
	};
};
var array = ["get", "post"];
array.forEach(function(type) {
	module.exports[type] = function(dataObject, opts) {
		return function(req, res, next) {
			var z = new zSchema(opts);
			z.validate(req[type+"s"], dataObject, next);
		}
	}
});