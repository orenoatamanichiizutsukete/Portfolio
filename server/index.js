
const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000
const handler = require("./handler.js")
app.use(cors())
app.get('/', (req, res) => {

})
app.get("/home", (req,res) =>{
    res.send(" YOUR NEW HOME")
})
app.get("/database/mango",(req,res) =>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.send("this da value")
})
async function RAH(req,res){
  console.log("YO A GUY JOINED TO BE CONTROLLED")
  console.log(await req.getHeadersName())
}
app.get("/Controlling/NEWJOINER",(req,res) => {
  res.cookie("RAHHAHAHAHA", "RAH?")
  res.send("hah")
  console.log("HAHAHHA IT's INSIDE")
  RAH(req,res)
  res.send("RAH GO AWAY")
})

app.get("/Controlling",(req,res) =>{
  console.log("YUP YUP YUP IT is in")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("HAHAHAH")