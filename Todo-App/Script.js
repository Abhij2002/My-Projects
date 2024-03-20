const express = require("express");
const app = express();
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json())
let todo = require("./Todo/data/data");
app.use(express.static(path.join(__dirname,"static")))

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/gettodo",async (req,res)=>{
  let data  = await todo.gettodo();
  res.send(data);
})
app.post("/addtodo",async(req,res)=>{
  let {taskitem} = req.body;
  console.log(taskitem);
  res.redirect("/");
})

app.listen(3000,()=>{
    console.log("server started");
})