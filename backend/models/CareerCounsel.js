const mongoose = require('mongoose');
 
const CareerCounselSchema = new mongoose.Schema(
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
        phone: { 
            type : String,
            trim: true,
            default: ''  
        },
        query: {
            type:  String,
            trim: true,
            default: ''            
        }
    },
    { timestamps: true }
);
 
const CareerCounsel = mongoose.model('CareerCounsel', CareerCounselSchema);
module.exports = CareerCounsel;

