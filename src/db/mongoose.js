const mongoose = require('mongoose')

const options = { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const headyDB = mongoose.createConnection(process.env.HEADYDB_URL, options)

module.exports = {
    headyDB
}