const express = require("express");
const router = express.Router();
const {leads,campaigns} =  require("../data")
const axios = require("axios");

router.get("/lead-data",(req,res)=>{
   try {
        res.send({
            message:"data fetched successfully",
            data: leads
        })
    } catch (error) {
    console.log(error)
   }
})

router.get("/campaign-data",(req,res)=>{
    res.status(200).json({
        message:"data fetched successfully",
        data: campaigns
    })
    
})



module.exports = router;