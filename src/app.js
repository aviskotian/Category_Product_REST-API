const express = require('express')
const bodyParser = require('body-parser')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')

const app = express() //Initialising express app
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true })) //parse content-type - application/x-www-form-urlencoded
app.use(express.json()) //parse content-type - application/json

//Define router middlewares
app.use(categoryRouter)
app.use(productRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
}).on('error', (err) => {
    console.log('Connot run the app because %s', err.message)
})