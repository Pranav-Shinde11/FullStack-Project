// require('dotenv').config({path: './env'});
import dotenv from "dotenv"
// import mongoosef from "mongoose";
// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";

dotenv.config({
    path: './env' 
})


import connectDB from "./db/index.js";

connectDB()






/*
import express from 'express';
const app = express();
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error :", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw error
    }
}) ()

*/