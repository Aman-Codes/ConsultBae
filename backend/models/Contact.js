const mongoose = require('mongoose');
 
const ContactSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            trim: true,
            default: ''  
        },
        email: {
            type : String,
            trim: true,
            default: ''  
        },
        message: { 
            type : String,
            trim: true,
            default: ''  
        },
    },
    { timestamps: true }
);
 
const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;

