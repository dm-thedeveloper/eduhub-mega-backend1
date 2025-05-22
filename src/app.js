import express, { Router } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();

const corsOptions = {};

// App Configuration
app.use(express.json({limit:"300kb"}))
app.use(express.static("public"))
app.use(express.urlencoded({extended: true , limit:"300kb"}))
app.use(cors({...corsOptions}));
app.use(cookieParser());

// Default Route
app.get("/" , (req , res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome To EDUB- API's Server</title>
</head>
<body style="background-color: lightblue; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">

  <h1 style="color: darkblue; font-size: 60px; font-family: Arial, sans-serif; text-shadow: 2px 2px white;">
    WELCOME To EDU-HUB API's Server
  </h1>

</body>
</html>
`)
})



// Routes Importing
import userRouter from "./routes/user.routes.js";


// Routes Decalarion 

app.use("/user" , userRouter)

export default  app
