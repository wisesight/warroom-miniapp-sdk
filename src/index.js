const functions = require("firebase-functions");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("dist"));
app.get("/", (req, res) => {
  res.sendFile("public/warroom.html", {root: __dirname});
});

app.get("/miniapp", (req, res) => {
  res.sendFile("public/miniapp.html", {root: __dirname});
});



app.listen(port,(err)=>{
  if(err){
    process.exit(1)
  }
  console.log('success!')
})


