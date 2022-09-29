const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session=require('express-session')
const flash=require('connect-flash')

mongoose
  .connect("mongodb://localhost:27017/shopping-app")
  .then(() => {
    console.log("DB Conneted");
  })
  .catch((err) => {
    console.log(err);
  });

//Routes
const productRoute = require("./routes/ProductRoute");
const reviewRoutes = require("./routes/reviewRoutes");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const sessionConfig = {
  secret: "weafjafaa",
  resave: false,
  saveUninitialized: true,
};



app.use(flash())
app.use(session(sessionConfig))

app.use((req,res,next)=>{
res.locals.success=req.flash('success')
res.locals.error=req.flash('error')
next()
})
app.use(productRoute);
app.use(reviewRoutes);

app.listen(3000, () => {
  console.log("server is up and running");
});
