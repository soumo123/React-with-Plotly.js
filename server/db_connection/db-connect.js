const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

// const URL = `mongodb+srv://${username}:${password}@cluster0.jwshh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.jwshh.mongodb.net:27017,cluster0-shard-00-01.jwshh.mongodb.net:27017,cluster0-shard-00-02.jwshh.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ts32q0-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.connect(URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log(`Connection is succesful`)
}).catch((err)=> console.log('No connection'))