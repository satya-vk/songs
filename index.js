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
  res.sendFile(__dirname+"/nkp.html");
});
app.get("/Jailvakusa",function(req,res){
  res.sendFile(__dirname+"/jlka.html");
});
app.get("/SarileruNikevvaru",function(req,res){
  res.sendFile(__dirname+"/slnk.html");
});
app.get("/BharathAneNenu",function(req,res){
  res.sendFile(__dirname+"/ban.html");
});
app.get("/Srimanthudu",function(req,res){
  res.sendFile(__dirname+"/smd.html");
});
app.get("/TuckJagadish",function(req,res){
  res.sendFile(__dirname+"/tk.html");
});
app.get("/V",function(req,res){
  res.sendFile(__dirname+"/v.html");
});
app.get("/BaleBaleMagadivoy",function(req,res){
  res.sendFile(__dirname+"/blbm.html");
});
app.get("/bahubali2",function(req,res){
  res.sendFile(__dirname+"/bahuc.html");
});
app.get("/bahubali1",function(req,res){
  res.sendFile(__dirname+"/bahub.html");
});
app.get("/akhil",function(req,res){
  res.sendFile(__dirname+"/akl.html");
});
app.get("/mrmajnu",function(req,res){
  res.sendFile(__dirname+"/mmu.html");
});
app.get("/hello",function(req,res){
  res.sendFile(__dirname+"/helo.html");
});






app.listen(process.env.PORT||3000,function(){
  console.log("server is started");
});
