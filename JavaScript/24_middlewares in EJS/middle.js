const express = require('express')
const app = express()
const port = 3000
const fs  = require("fs")
const birds = require('./routes/birds')



app.use('/birds', birds)

app.use(express.static("public"))

// middleware 1 - logger for our application  
const myLogger = function (req, res, next) {
    console.log(req.headers);
    req.shub= "i am shubham ";
    fs.appendFileSync("logos.txt",`${Date.now() } is a ${req.method} \n`)
    next()
}
app.use(myLogger)
// to use function we use this syntax

// middleware 2
app.use((req,res, next)=>{
    console.log("m2");   
    next()
})


app.get('/', (req, res) => {
  res.send('Hello World! heee'+ req.shub)
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})