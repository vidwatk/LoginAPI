require("./config/db")

const app = require("express")();
const port = 3000;

const UserRouter = require("./api/User")

const bodyParse = require("express").json;
app.use(bodyParse());

app.use("/user", () => UserRouter)

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})