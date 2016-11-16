##latte_web_zSchema

latte_web的中间件

判断对象属性是否正确

```js
(function() {

	this.get = [latte_web_zSchema({
		type: "object",
		properties: {
            a: { type: "int" },
            b: { type: "string" }
        }
	}),function(req, res) {

	}];
	this.path = "/test";
}).call(module.exports);
```

打开浏览器http://127.0.0.1:8080/test?a=1&b=hello