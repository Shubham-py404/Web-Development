import mongoose from "mongoose";
import express from "express";
import writed from "./models/write.js";
mongoose.connect('mongodb://localhost:27017/Exgenerate')
const port = 3000



let app = express();

app.set('view engine', 'ejs');

const getrandom=()=>{
  let f = Math.floor(Math.random()*4)
  let g = Math.floor(Math.random()*4)
  let h = Math.floor(Math.random()*4)
  let i = Math.floor(Math.random()*4)
  let j = Math.floor(Math.random()*2)
  return { f, g, h, i, j };
}

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});

app.get('/generate', async(req, res) => {

  let a= ['shubham','harry','gojo','doremon']
  let b= [45000,50000,40000,55000]
  let c = ['python','javaScript','c++','mernstack']
  let d= ['delhi','Mumbai','bangalore','punjab']
  let e= [true,false]
   for (let il = 0; il < 10; il++) {
    const { f, g, h, i, j } = getrandom();
      let ez = await writed.create({name:a[f],salary: b[g],language: c[h],city:d[i],isManager :e[j]}) 
  }
});

app.get('/delete', async(req, res) => {
  await writed.deleteMany({})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));