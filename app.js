const express 			= require('express')
const app 				= express()
const sassMiddleware 	= require('node-sass-middleware')


app.use(
	sassMiddleware({
		src: __dirname + '/static/css', 
		dest: __dirname + '/static/css',
		debug: true
	})
)

app.use(express.static('static'))

app.get('/', (req, res) =>{
	console.log('someone opened the main page')
	res.send("I work")
})


app.listen(3000,()=>{
	console.log('Express listening')
})
