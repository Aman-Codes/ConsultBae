const mongoose = require('mongoose');
 
const RecruitmentSchema = new mongoose.Schema(
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
        company: {
            type:  String,
            trim: true,
            default: ''            
        }
    },
    { timestamps: true }
);
 
const Recruitment = mongoose.model('Recruitment', RecruitmentSchema);
module.exports = Recruitment;

