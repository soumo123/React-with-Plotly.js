const express = require('express');
const app = express()
const mongoose = require("./db_connection/db-connect")
const cors = require('cors');
require(`dotenv`).config()
const plotly = require('./collections/plotly_api');
const user = require('./collections/user_api');
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/data", plotly)
app.use("/user", user)
const port = process.env.port || 5000


app.listen(port, () => console.log(`Server running ${port}`))
