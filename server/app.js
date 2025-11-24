import express from  "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT 

app.get("/",(req,res)=>{
    try {
        res.status(200).json({ msg : "hello abdullah" })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


app.post("/about",(req,res)=>{
    try {
        let userDetails = req.body
        console.log(userDetails);
        res.status(200).json(userDetails)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.put("/contact",(req,res)=>{
    try {
        let userDetails = req.body
        console.log((userDetails));
        res.status(200).json(userDetails)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


app.delete("/login",()=>{
    try {
         let userDetails = req.body
        console.log((userDetails));
        res.status(200).json(userDetails)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.listen(PORT,()=>{
    console.log(`Server is on http://localhost:${PORT} `);
})