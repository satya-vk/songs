const express=require("express");
const app=express();
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/Janatagarege",function(req,res){
  res.sendFile(__dirname+"/janata.html");
});
app.get("/NannakuPrematho",function(req,res){
  res.sendFile(__dirname+"/janata.html");
});
app.get("/Jailvakusa",function(req,res){
  res.sendFile(__dirname+"/janata.html");
});


app.listen(process.env.PORT||3000,function(){
  console.log("server is started");
});
