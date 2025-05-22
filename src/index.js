import dotenv from "dotenv";
import DBConnection from "./db/connection.db.js";
import app from "./app.js";

dotenv.config({path:".env"});

const port = process.env.PORT ||  5001

DBConnection()
.then( ()=>{
    app.listen(port , ()=>{
        console.log(`=> App is Listening On http://localhost:${port}`);
    })
})
.catch((error) => console.log("Errorn On App listening " , error)
)