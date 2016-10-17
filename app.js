const express = require('express')
const app = express()


app.use(express.static('static'));

app.get('/', (req, res) =>{
	console.log('someone opened the main page')
	res.send("I work")
})


app.listen(3000,()=>{
	console.log('Express listening')
})
