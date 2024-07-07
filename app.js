const express = require("express")

const app = express()

app.listen(5000,()=>{
    console.log(("Hello World"));
})
app.get("/",(req,res)=>{
    res.send("This is homepage");
})

app.get("/about", (req,res)=>{
    const name = "Rajesh"
    res.render("about.ejs",{name})
})

app.get("/name", (req,res)=>{
    const name = "Rajesh"
    res.render("about.ejs",{name})
})

app.get("/contact", (req,res)=>{
    const name = "Rajesh"
    
    res.render("about.ejs",{name})
})