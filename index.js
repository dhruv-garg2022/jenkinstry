const express = require("express")

const app =express()

app.get('/',(req,res)=>{
    console.log("Index Page")
    res.send("<h1>WELCOME TO THE NODE JS APP</h1>")
})

app.get('/about',(req,res)=>{
    console.log("About Page")
    res.send("<h1>WELCOME TO THE About Page of NODE JS APP</h1>")
})

app.listen(3000)