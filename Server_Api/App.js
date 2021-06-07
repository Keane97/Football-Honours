require("./Models/DbConnection");

const express = require("express");


const rtsIndex = require("./routes/index.router");

var app = express();
var port = 3000;
const cors = require("cors");

app.use(function (req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Coontent-Type, Accept");
  next();
})

app.use("/api", rtsIndex);
app.use(cors());


//start server
app.listen(port, () =>
  console.log('Server started at port:' + ' ' + port)
);
