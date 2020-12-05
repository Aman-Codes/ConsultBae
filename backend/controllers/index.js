const CareerCounsel = require('../models/CareerCounsel');
const ChampionCV = require('../models/ChampionCV');
const Recruitment = require('../models/Recruitment');
const Contact = require('../models/Contact');
const nodemailer = require("nodemailer");

const senderEmail = require('../config/keys').senderEmail;
const senderPassword = require('../config/keys').senderPassword;
const receiverEmail = require('../config/keys').receiverEmail;

const multer = require("multer");
var AWS = require("aws-sdk");
var storage = multer.memoryStorage();

/* Global Utility Function to check if variable exists*/
function isExists ( variable ) {
    if(typeof(variable) !== 'undefined' && variable !== null  && variable !== "" ) {
        return true;
    }
    else{
        return false;
    }    
}

exports.championcv = (req, res) => {
    const file = req.file;
    const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

    let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    var params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'ChampionCV/' + Date.now().toString(),
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
    }; 

    s3bucket.upload(params, function(err, data) {
        if (err) {
            res.status(500).json({ 
                success: false,
                message: "Error in uploading file"
            });
        }
        else {
            const { 
                name, 
                email, 
                phone
            } = req.body;
        
            // validate Input Data
            if( isExists(name) && isExists(email) && isExists(phone) )
            {
                var obj = new ChampionCV({
                    name: name,
                    email: email, 
                    phone: phone,
                    fileUrl: s3FileURL + params.Key,
                    fileS3_Key: params.Key
                })
                ChampionCV.create(obj, function(err,item){
                    if(err)
                    {
                        console.log(err);
                        return res.status(400).json({
                            success: false,
                            message: "Error in saving in database"
                        });
                    }      
                    else{
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                              user: senderEmail,
                              pass: senderPassword
                            }
                          });
        
                        let emailmessage = "HI you have a new ChampionCV request from " + item.name + 
                        ".\nUser Details: \nName: " + item.name + 
                        "\nEmail: " + item.email+ 
                        "\nPhone Number: " + item.phone+
                        "\nResume Link: " + item.fileUrl;
        
                        var mailOptions = {
                            from: senderEmail,
                            to: receiverEmail,
                            subject: 'New ChampionCV Request',
                            text: emailmessage,
                        };
        
                        transporter.sendMail(mailOptions, function(error, info){
                            if (error) 
                            {
                              console.log(error);
                            } 
                            else 
                            {
                                console.log("Successfully Created ChampionCV");
                                res.json({
                                    success: true,
                                    message: "Successfully Created ChampionCV"
                                });
                            }
                        });
                    }
                });
            }
            else{
                return res.status(400).json({
                    success: false,
                    message: "Invalid input data"
                });
            }
        }
    });
};

exports.careercounsel = (req, res) => {
    const { name, email, phone, query } = req.body;

    // validate Input Data
    if( isExists(name) && isExists(email) && isExists(phone) && isExists(query) )
    {
        var obj = new CareerCounsel({
            name: name,
            email: email, 
            phone: phone,
            query: query
        })
        CareerCounsel.create(obj, function(err,item){
            if(err)
            {
                console.log(err);
                return res.status(400).json({
                    success: false,
                    message: "Error in saving in database"
                });
            }      
            else{
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: senderEmail,
                      pass: senderPassword
                    }
                  });

                let emailmessage = "HI you have a new Career Counsel request from " + item.name + 
                ".\nUser Details: \nName: " + item.name + 
                "\nEmail: " + item.email+ 
                "\nPhone Number: " + item.phone+
                "\nQuery: " + item.query;

                var mailOptions = {
                    from: senderEmail,
                    to: receiverEmail,
                    subject: 'New Career Counsel Request',
                    text: emailmessage,
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) 
                    {
                      console.log(error);
                    } 
                    else 
                    {
                        console.log("Successfully Created CareerCounsel");
                        res.json({
                            success: true,
                            message: "Successfully Created CareerCounsel"
                        });
                    }
                });

            }
        });
    }
    else
    {
        res.status(400).json({
            success: true,
            message: "Invalid input data"
        });
    }
};

exports.recruitment = (req, res) => {
    const { name, email, phone, company } = req.body;

    // validate Input Data
    if( isExists(name) && isExists(email) && isExists(phone) && isExists(company) )
    {
        var obj = new Recruitment({
            name: name,
            email: email, 
            phone: phone,
            company: company
        })
        Recruitment.create(obj, function(err,item){
            if(err)
            {
                console.log(err);
                return res.status(400).json({
                    success: false,
                    message: "Error in saving in database"
                });
            }      
            else{
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: senderEmail,
                      pass: senderPassword
                    }
                  });

                let emailmessage = "HI you have a new Recruitment request from " + item.name + 
                ".\nUser Details: \nName: " + item.name + 
                "\nEmail: " + item.email+ 
                "\nPhone Number: " + item.phone+
                "\nCompany: " + item.company;

                var mailOptions = {
                    from: senderEmail,
                    to: receiverEmail,
                    subject: 'New Recruitment Request',
                    text: emailmessage,
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) 
                    {
                      console.log(error);
                    } 
                    else 
                    {
                        console.log("Successfully Created Recruitment");
                        res.json({
                            success: true,
                            message: "Successfully Created Recruitment"
                        });
                    }
                });
            }
        });
    }
    else
    {
        res.status(400).json({
            success: true,
            message: "Invalid input data"
        });
    }
};

exports.contact = (req, res) => {
    const { name, email, message } = req.body;

    // validate Input Data
    if( isExists(name) && isExists(email) && isExists(message))
    {
        var obj = new Contact({
            name: name,
            email: email, 
            message: message,
        })
        Contact.create(obj, function(err,item){
            if(err)
            {
                console.log(err);
                return res.status(400).json({
                    success: false,
                    message: "Error in saving in database"
                });
            }      
            else{
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: senderEmail,
                      pass: senderPassword
                    }
                  });

                let emailmessage = "HI you have a new Conatct request from " + item.name + 
                ".\nUser Details: \nName: " + item.name + 
                "\nEmail: " + item.email+ 
                "\nMessage: " + item.message;

                var mailOptions = {
                    from: senderEmail,
                    to: receiverEmail,
                    subject: 'New Conatct Request',
                    text: emailmessage,
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) 
                    {
                      console.log(error);
                    } 
                    else 
                    {
                        console.log("Successfully Created Conatct");
                        res.json({
                            success: true,
                            message: "Successfully Created Conatct"
                        });
                    }
                });
            }
        });
    }
    else
    {
        res.status(400).json({
            success: false,
            message: "Invalid input data"
        });
    }
};