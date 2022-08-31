const express = require("express");
const bodyParser = require("body-parser")
const axios = require("axios");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//app.get is a root route get method that specifies what should happened
//when a browser gets in touch with the server:
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/contact", (req,res)=>{
    res.send("Welcome to my contact ROUT!. Contact me on 054-2738944")
})

axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

app.post("/", (req,res)=>{
    res.send("Thank you for clicking on me!")
});

app.listen(3000,()=>{
    console.log("Server started on port 3000: http://localhost:3000/");
});