const express= require("express");
const bodyParser= require("body-parser");
const mongoose=require('mongoose');
const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://adityarajsingh:Adi-1234@cluster0-lpugz.mongodb.net/test?retryWrites=true/bitformDB",{useNewUrlParser:true});

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please your data entry, no name specified!"]
    },
    gender: String,
    age: String,
    address: String,
    email: String,
    mobile: String,
    education: String,
    institution: String,
    workScience: String,
    workFilm: String,
    reason: String,
    weblink: String,
});

const Person=mongoose.model("Person",personSchema);



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

    const p1=new Person({
    name:(req.body.name),
    gender:(req.body.gender),
    age:(req.body.age),
    address:(req.body.address),
    email:(req.body.email),
    mobile:(req.body.mobile),
    education:(req.body.education),
    institution:(req.body.institution),
    workScience:(req.body.workScience),
    workFilm:(req.body.workFilm),
    reason:(req.body.reason),
    weblink:(req.body.weblink),
    
});
p1.save();
res.redirect("/");
});


app.listen(process.env.PORT || 3000,function(){
console.log("Server started on port 3000");
});