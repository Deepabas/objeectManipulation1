const express = require("express");
const app = express();
const mongoose = require("mongoose")
const model = require("./model")
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");


app.use(bodyParser.json());

// app.post('/', async (req, res)=>{
//     //console.log(req.body)
//     const post = new model({
//         user: req.body.user,
//         phoneNumber: req.body.phoneNumber,
//         email:req.body.email,
//         password:req.body.password
//     });
//     try {
//         const savedPost = await post.save();
//         res.json(savedPost);
//     } catch (err) {
//         res.json({ message:err});
//     }
// });

//step1


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'deepabaskaran.b@gmail.com',
        pass:'deepa@123'
    }
});
// step2
var mailOptions = {
    from:'deepabaskaran.b@gmail.com',
    to:'deepa.doodleblue@gmail.com',
    subject:'Sending Email using Node.js',
    text: `Hi welcome`
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error)
    } else{
        console.log('Email sent:' + info.response)
    }
})

app.listen(3000,() => {
    console.log("server listening in port 3000")
})

mongoose.connect('mongodb+srv://user:MbvyVlIqk0xlPnZs@cluster0.uxdtw.mongodb.net/test', {
        useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true, })
        .then(() => console.log("mongodb connected"))
        .catch(err => console.log(err));
