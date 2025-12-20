import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

//App config
const port = process.env.PORT || 4000;
const app = express();
await connectDB();

//Initialize middlewares
app.use(express.json());
app.use(cors())

//API routes
app.get("/", (req,res)=>res.send("Api working"))
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter)

// starting the server 
app.listen(port, ()=>console.log(`Server is running on http://localhost:${port}`));