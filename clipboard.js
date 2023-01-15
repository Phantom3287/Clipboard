const express = require('express')
const app = express()
const port = 3000
const arr=[]
  // app.post("/post",(req,res)=>{
  //   const copyText=req.body.text
  //   arr.push(copyText);
  //   res.send("sent on cloud")
  // })

  app.set('view engine', 'ejs')


let Data = "";

  setInterval(function () { 
    isUpdated = false;
    fetch('http://jsonblob.com/api/jsonBlob/1063969434733133824')
      .then(response => response.json())
      .then(data => {
        let text = data.text;
        if (text !== Data) {
          Data = text;
          isUpdated = true;
  //        clipboardy.writeSync(text);
        }
    });
}, 1000);

// app.get("/get",(req,res)=>{{
//     res.send(arr)
// }})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req,res)=>{
  if(isUpdated=='true'){
    res.render({index, text: text})
  }
})