require("dotenv").config();
const express = require("express");
const app = express();

const userRouter=require("./api/users/user.router");

app.use(express.json());

app.use("/api/users",userRouter);



// app.get("/",(req,res)=>{
//     res.json({
//         sucess:1,
//         message:"sucessfully running "
//     });
// });

app.listen(process.env.APP_PORT,()=>{
    console.log("server start and running on port:",process.env.APP_PORT);
});