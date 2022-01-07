const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('hi world, whats up? from express')
})

app.listen(port, () => {
	console.log(`hi world app is listening on port ${port}`)
})