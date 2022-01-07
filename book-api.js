const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

//data
let books = []

app.use(cors())

//configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.post('/book', (req, res) => {
	const book = req.body

	console.log(book)
	books.push(book)
})

app.get('/books', (req, res) => {
	res.json(books)
})

app.listen(port, () => {
	console.log(`hi world app is listening on port ${port}`)
})