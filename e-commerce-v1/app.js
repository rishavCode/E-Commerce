const express = require("express");
const app = express();
const path = require("path");
const ejsMate =require('ejs-mate') 
const mongoose=require('mongoose')
const methodOverride=require('method-override')
mongoose.connect('mongodb://localhost:27017/shopping-app')
.then(()=>{console.log('DB Conneted')})
.catch((err)=>{console.log(err)})

//Routes
const productRoute=require('./routes/ProductRoute');


app.engine('ejs',ejsMate)
app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));


app.use(productRoute);
app.listen(3000, () => {
  console.log("server is up and running");
});
