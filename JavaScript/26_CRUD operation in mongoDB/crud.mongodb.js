use("CrudDb")

// db.createCollection("courses")
// db.courses.insertOne({
//    name:"shubham's web dev",
//    price: 0,
//    assignments : 12,
//    projects:45
// })




// let a = db.courses.find({price:0})
// console.log(a.count());

// console.log(a.toArray());


let b = db.courses.findOne({price:0})
// isse sirf phela data hee fetch hoga 
// console.log(b);



// update--
// db.courses.updateOne({price:0},{$set:{price:100}})
// updating price only first on e


db.courses.updateMany({price:0},{$set:{price:100}})
// jinke o hai  unko 100 kr dega



//delete 
// db.courses.deleteOne({price:100})  
// db.courses.deleteMany({price:100})  

// $eq- matches the value that equal t a specified one 


// $in - matches the valu in the array 