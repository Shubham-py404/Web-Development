// using bootstrap - gives a html template for website
// how to use ejs with express- https://github.com/mde/ejs/wiki/Using-EJS-with-Express
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  let  sitename = "shubham"
  // ab hum inn variables ko wha display krane ke liye EJs ka use krnge
  let  searchtext= "search now"
    // using array 
    let arr = [1,5,3,5,6]
  res.render("index",{sitename: sitename, searchtext:searchtext,arr: arr})
})
app.get("/blog/:slug", (req, res) => { 
  let blogtitle = "how are u "
  let blogcont = "its very good "

  res.render("blogpost",{blogTitle:blogtitle,blogContent: blogcont})
}) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})