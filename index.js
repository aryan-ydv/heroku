const express=require("express");
const app=express();
const path = require("path");
const hbs = require("hbs");

const port=process.env.PORT ||3000;

const staticPath = path.join(__dirname, "./");
const views = path.join(__dirname, "./templates/views");


app.set("view engine", "hbs");
app.set("views", views);
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
 
    res.render("home")
    

})
app.listen(port,()=>{
    console.log("app is running");
})