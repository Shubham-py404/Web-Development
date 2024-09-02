const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
// ye blog waali file mains ke through access ho rhi hai 

const app = express()
const port = 3000   


app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log("hey its get request");
  res.send('Hello World!12')
})

// how to use post req 
// isko run krne ke liye hume html File banani pdegi per ye agar multiple hui toh  hume multiple file bnani pdegi 
// isse bdia hum post man ka use krnege 
app.post('/', (req, res) => {
  console.log("hey its post  request");
  res.send('Hello World! post ')
})

// ye post ko hee update krti hai ye req update krti hai  
app.put('/', (req, res) => {
  console.log("hey its put  request");
  res.send('Hello World! put ')
})

app.get("/index",(req, res) => {
  console.log("hey its index");
  res.sendFile('templates/index.html',{root:__dirname}) 
})//iss method se hum puri html file get kr skte hai 

app.get("/api",(req, res) => {
  console.log("hey its api");
  res.json({"a":1,"b":2, "c":3, "d":4 , name :["harry", "gojo","yuta"]}) 
})//other examples hum json behj skte hai 


app.listen(port, () => {
  console.log(` hell Example app listening on port ${port}`)
})
