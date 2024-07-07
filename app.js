const express = require("express")

const app = express()

// The listen method is a fundamental part of creating servers in Node.js. Here’s a recap of how it is used in different contexts:
// http Module: Used to create an HTTP server and specify the port and hostname.
// Express Framework: Simplifies server creation and listens on a specified port.
// Unix Sockets/Windows Named Pipes: Used for inter-process communication by listening on a Unix socket or named pipe.

app.listen(5000,()=>{
    console.log(("Hello World"));
})

//send and render are used for handling responses in Node.js applications

// Use .send when you need to send a response directly without any server-side template rendering.
// Use .render when you need to generate HTML dynamically using a template engine and send it to the client.

app.get("/",(req,res)=>{
    res.send("This is homepage");
})

// The response can also be sent using ".render()" method in EJS, Pug or Handlebars
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