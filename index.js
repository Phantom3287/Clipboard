const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const arr=[]
  app.post("/post",(req,res)=>{
    const copyText=req.body.text
    arr.push(copyText);
    res.send("sent on cloud")
  })

app.get("/get",(req,res)=>{{
    res.send(arr)
}})
var a;
a=0;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname , 'index.html'))
  })
app.post("/url",(req,res)=>{
    const text=req.body
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})