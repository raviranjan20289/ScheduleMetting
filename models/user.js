const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },

    Username: {
        type:String,
        required: true,
        unique: true
    },

    Email: {
        type: String,
        required: true,
        unique:true
    },

    Password: {
        type: String,
        required: true
    },

    
    createdAt: {
        type: Date,
        default:Date.now(),
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    },
  
    
});

module.exports = mongoose.model('User', userSchema);
