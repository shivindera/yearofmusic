var express = require('express')
	, logger = require('morgan')
	, app = express()
	, template = require('jade').compileFile(__dirname + '/templates/homepage.jade')

app.use(logger('dev'))
app.use('/img', express.static(__dirname + '/static/img'))
app.use('/css', express.static(__dirname + '/static/css'))
app.use('/js', express.static(__dirname + '/static/js'))
app.use('/json', express.static(__dirname + '/static/json'))

app.get('/', function (req, res, next) {
	try {
		var html = template()
		res.send(html)
	} catch (e) {
		next(e)
	}
})

app.listen(3000, function () {
	console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
