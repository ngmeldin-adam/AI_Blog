import express from "express";
import 'dotenv/config'
import cors from "cors"
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoute.js";
import blogRouter from "./routes/blogRoute.js";

const app = express();

await connectDB();

//Middleware
app.use(cors())
app.use(express.json())

const myName = "ngmadam" 
myName.toLowerCase().includes

app.get("/", (req,res)=>{ res.send("API is Working")})
app.use("/api/admin",adminRouter);
app.use("/api/blog",blogRouter);


const PORT  = process.env.PORT || 3000;


app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
})

export default app;
