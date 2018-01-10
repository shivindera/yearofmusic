var express = require('express')
	, logger = require('morgan')
	, favicon = require('serve-favicon')
	, path = require('path')
	, app = express()
	, template = require('jade').compileFile(__dirname + '/templates/homepage.jade')

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, '/static/img', 'favicon.ico')))
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
