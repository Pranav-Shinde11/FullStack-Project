// require('dotenv').config({path: './env'});
import dotenv from "dotenv"
// import mongoosef from "mongoose";
// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";
import app from "./app.js";

dotenv.config({
    path: './env' 
})


import connectDB from "./db/index.js";

connectDB()
.then(()=>{app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO CONNECTION FAILED ", error)
})






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