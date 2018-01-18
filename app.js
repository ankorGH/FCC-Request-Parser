const express = require("express")
const os = require("os")
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+"/public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html")
})

app.get("/whoami",(req,res) => {
    let userDetails = {
        ip:req.ip,
        language:req.headers["accept-language"],
        software:req.headers["user-agent"]
    }
    res.send(JSON.stringify(userDetails))
})

let listener = app.listen(port,() => {
    console.log("listening at port "+ port)
})