const express = require("express");
const app = express();
const axios = require("axios");
const staticRoute = require("./routes/route")
const getdata = require("./routes/getdata");
const cors = require("cors");
const {jsPDF} = require("jspdf");
const fs = require("fs");

//middleware
app.use(express.json());
app.use(cors());

app.use("/user",staticRoute); // data will post here
app.use("/get",getdata); // data will get here


app.get("/",(req,res)=>{
    res.send("hello world")
})

// read file
const filecontent = fs.readFile("/test.txt",'utf-8',(err,data)=>{
    if(err){
        console.log("error");
    }
});
// pdf download
app.get('/pdf', async (req, res) => {
    const docs = new jsPDF();
    docs.text('Hello, World!', 100, 100); // can pass filecontent inplace of hello world
    docs.save('sample.pdf');  
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));