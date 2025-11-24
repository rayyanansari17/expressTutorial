import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
let PORT = process.env.PORT

app.get("/", (req, res) => {
    try {
        // console.log(`Req.body ==> ${req.body}`);
        // console.log(`Req.param ===> ${req.params}`);
        // console.log(`Req.query ==> ${req.query}`);

        // console.log(`Req.method ==> ${req.method}`)// GET
        // console.log(`Req.baseUrl ==> ${req.baseUrl}`);// ==>
        // console.log(`Req.hostname ==> ${req.hostname}`);// localhost

        // console.log(`Req.ip ==> ${req.ip}`);//       ::1
        // console.log(`Req.ips ==> ${req.ips}`);//       ==>     
        // console.log(`Req.originalUrl ==>${req.originalUrl} `); ==> /

        // console.log(`Req.path ==> ${req.path}`); ==> /
        // console.log(`Req.protocol ==> ${req.protocol}`);==> http 

    } catch (error) {
        console.log(error);
        res.status(200).json(error)
    }
})


app.get("/a", (req, res) => {
    try {
        // res.status(200).json({ msg: "hI" })
        // res.status(200).download("/home/suhail/CFI-B25-Classwork/express/server2/test.webp")

        // res.status(200).end("hello");
        res.status(200).redirect("http://youtube.com");

    } catch (error) {
        console.log(error);
        res.status(200).json(error)
    }
})


app.listen(PORT, () => {
    console.log(`your server is running on http://localhost:${PORT}`);
})