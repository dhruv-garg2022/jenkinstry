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

app.get('/career',(req,res)=>{
    console.log("Career Page")
    res.send("<h1>WELCOME TO THE Career Page of NODE JS APP</h1>")
})

app.get('/new',(req,res)=>{
    console.log("New Page")
    res.send("<h1>WELCOME TO THE New Page of NODE JS APP</h1>")
})

app.listen(3000)