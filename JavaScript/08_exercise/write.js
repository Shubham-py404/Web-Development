import mongoose from "mongoose"


let f = Math.floor(Math.random()*4)
let g = Math.floor(Math.random()*4)
let h = Math.floor(Math.random()*4)
let i = Math.floor(Math.random()*4)
let j = Math.floor(Math.random()*2)
let a= ['shubham','harry','gojo','doremon']
let b= [45000,50000,40000,55000]
let c = ['python','javaScript','c++','mernstack']
let d= ['delhi','Mumbai','bangalore','punjab']
let e= ['true','false']
let kl = {name:a[f],salary: b[g],language: c[h],city:d[i],isManager :e[j]}


const data= new mongoose.Schema({name: String, salary:Number,language:String,city:String,isManager:Boolean })

export const written = mongoose.model('write', data)
export default written