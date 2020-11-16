const mongoose = require('mongoose');
 
const ChampionCVSchema = new mongoose.Schema(
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
        fileUrl: {
            type:  String,
            trim: true,
            default: ''            
        },
        fileS3_Key: {
            type:  String,
            trim: true,
            default: ''            
        },
    },
    { timestamps: true }
);
 
const ChampionCV = mongoose.model('ChampionCV', ChampionCVSchema);
module.exports = ChampionCV;

