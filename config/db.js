const mongoose = require('mongoose')
const config = require('config')


const connectdb = () => {
    mongoose.connect(config.get("MONGO_URI"), { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true })
        .then(() => console.log("Mongoose connected"))
        .catch((err) => console.log("Mongoose not connected"))
}

module.exports = connectdb