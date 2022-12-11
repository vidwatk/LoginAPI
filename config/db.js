require("dotenv").config();
const mongoose = require("mongoose");

mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("The database is now connected. Mission 1: Accomplished ;)")
})
.catch((err) => console.log("err"))