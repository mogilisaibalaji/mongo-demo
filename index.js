const express = require("express");
const app = express();

const mongoose = require("mongoose");

const {UserModel} = require("./db");
app.use(express.json());

mongoose.connect ("mongodb+srv://saibalajimogili_db_user:admin123@cluster123.5cb5zgu.mongodb.net/practice");

app.post("/add",async function(req,res){
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;

    const newUser = await UserModel.create({
        name,
        age,
        phone
    });
   

    res.json({
        Message:"The new user is added",
        user:newUser
    });

})

app.listen(3000,()=>{
    console.log("The serever is running in the port 3000");
});