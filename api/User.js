const express = require("express")
const router  = express.Router();


router.post("./register", (req,res) => {
    let {name, email, password, dateOfBirth, phoneNumber} = req.body;
    name = name.trim();
    email = email.trim()
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();
    phoneNumber = phoneNumber.trim();

    if (name == "" || email == "" || password == "" || dateOfBirth == "" || phoneNumber == "") {
        res.json({
            status: "FAILED",
            message: "Do not leave any input fields empty"
        });
    }else if (!/^([^\p{N}\p{S}\p{C}\\\/]{2,20})$/.test(name)) {                          //https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
        res.json({
            status: "FAILED, does not pass the validation. Check the front end for more info"
        })
    }
})

router.post("./login", (req,res) => {
    
})