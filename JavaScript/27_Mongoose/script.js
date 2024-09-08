import mongoose from "mongoose";
import express from "express";
import {Todo}  from "../27_Mongoose/models/todo.js"

let con = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo1 = new Todo({
    title: "hey first todo ",
    desc: "description of this todo",
    isDone: false,
    days: "fgdfg"
  }); 
  // ye code har data ko mongoose ke database mai insert krega aur hum agr no. krenge toh wo use string mai convert krke insert krega
  todo1.save();
  res.send("Hello World!");
});


app.get("/a", async (req, res) => {
  let todo = await Todo.findOne({})
  res.json({todo:todo.title, desc: todo.desc});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
