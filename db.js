const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {type : String},
    age : Number,
    phone : {type : Number, unique : true}
});
const TodoSchema = new Schema({
    
})

const UserModel = mongoose.model("Users",UserSchema);

module.exports = {
    UserModel
};

