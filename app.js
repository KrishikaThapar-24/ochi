const express=require('express')
const app=express();
const userModel=require('./models/users')
const postModel=require('./models/posts');
const posts = require('./models/posts');
app.get('/',(req,res)=>{
  res.send("welcome")
})

app.get("/create",async(req,res)=>{
  let user=await userModel.create({
    username:"harsh",
    age:25,
    email:"harsh@gmail.com"
    
  })
  res.send(user)
})

app.listen(3000)