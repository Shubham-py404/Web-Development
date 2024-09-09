import mongoose from "mongoose"
import express from "express"
await mongoose.connect('mongodb://localhost:27017/Exgenerate')
const port = 3000
import Write from "../08_exercise/write.js"


let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
//   res.render('index.ejs', {foo: 'FOO'});
});

app.get('/generate', (req, res) => {
   for (let i = 0; i < 10; i++) {
     let e = write.create() 
});

  
app.listen(4000, () => console.log('Example app listening on port 4000!'));