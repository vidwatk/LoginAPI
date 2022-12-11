require("./config/db")

const app = require("express")();
const port = 3000;

const bodyParse = require("express").json;
app.use(bodyParse)

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})