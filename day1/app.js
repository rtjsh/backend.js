const express = require("express")
const app = express()

app.listen(3000,() =>{
    console.log("Hey Nodejs learner. It is at port " +3000);

    
})

app.get("/", (req,res)=>{
    console.log(req);
    res.send("This is homepage") // It works as a return 
})

app.get("/about", (req,res)=>{
    res.render("about.ejs")
})

app.get("/name", (req,res)=>{
    const name = "Rajesh"
    res.render("about.ejs",{name})
})

app.get("/contact", (req,res)=>{
    const name = "Rajesh"
    const Roll_no = 5
    const email = "okthatsall@gmail.com"
    res.render("about.ejs",{name},{Roll_no},{email})
})

 



// if a function is passed as an argument in a method, then it is called "callback function". Here, arrow function is a callback function since it is used as an argument in the method "listen"