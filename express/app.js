const express = require('express');

const app = express();
const path = require('path');
const port =80;

//for serving static files
app.use('/static',express.static('static'));

//set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views',path.join(__dirname,'views'));

//our pug demo endpoint
app.get("/demo", (req, res) =>{
  res.status(200).render('demo', { title: 'Hey there', message: 'Thanks man. I really appreciate this' })
});

//handles get requests
app.get("/",(req,res)=>{
    res.status(200).send(`This is the home page of my first express app`)
})
app.get("/about",(req,res)=>{
    res.send(`This is the About page of my first express app`)
})
app.get("/services",(req,res)=>{
    res.send(`This is the Services page of my first express app`)
})
app.get("/contacts",(req,res)=>{
    res.send(`This is the contacts page of my first express app and its a get request`)
})

//handles post requests
app.post("/contacts",(req,res)=>{
    res.send(`This is the contacts page of my first express app and its a post request`)
})

app.get("/this",(req,res)=>{
    res.status(404).send(`page not found`);
})

app.listen(port,()=>{
    console.log(`This application has been successfull started on ${port}`)
})

//USE COMMAND 'nodemon app.js' This will automatically reflect the changes made in the editor 