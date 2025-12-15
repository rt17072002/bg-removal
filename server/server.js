import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js";

//App config
const port = process.env.PORT || 4000;
const app = express();
await connectDB();

//Initialize middlewares
app.use(express.json());
app.use(cors())

//API routes
app.get("/", (req,res)=>res.send("Api working"))

app.listen(port, ()=>console.log(`Server is running on http://localhost:${port}`));