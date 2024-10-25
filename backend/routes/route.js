const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/",(req,res)=>{
    res.send("hello world");
})

router.post("/crm/createuser",(req,res)=>{
    const data = req.body;
    console.log(data);
    axios.post("dummy-route.js/",data)
    .then((response)=>{
        res.status(200).send("user created successfully");
    })
    .catch((error)=>{
        res.status(400).json({message:error.message,status:"failed"});
    })
});

router.post("/crm/sendcampaign",(req,res)=>{
    const data = req.body;
    axios.post("dummy-route.js/",data)
    .then((response)=>{
        res.status(200).send(response.data);
    })
    .catch((error)=>{
        res.status(400).json({message:error.message,status:"failed"});
    })
});


module.exports = router;