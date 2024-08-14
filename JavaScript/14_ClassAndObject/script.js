// object oriented programme

let obj={

    a:"shubham ",
    b:"hell",
    c:"nooo"
};
console.log(obj);
 
// prototype ek obj hai jisme functions,and hum objects ke andar properties add kr skte hai 

// example--

// let animals ={
//     eats:true
// }
// let rabbit={ 
//     jumps:true
// }
// rabbit.__proto__= animals
// iss syntax ki help se hum rabbits se hee eats variable ko access kr skte hai 

class animals{
    // class helps to implement features to access from prototype
    constructor(name){
    // hamesha run krega jb isme object bengea

        this.name=name
    // this  se ek name naam ke variable asign hogya hai jise hum a.name se access kr skte hai 
        console.log("object is created ");
    }
    eats(){
        console.log("hello world");
    }
    jumps(){
        console.log("eji baaji buji");
            
    }
      
}''
let a = new animals("bakchod")
console.log(a);
class lion extends animals{
    constructor(name){
        super(name)
        // super use krenge kyoko humne animals use kra hai jb bhi class mai ek aur class access hogi tb yeh aayega
        this.name= name
        console.log("obj is created and that is lion...");
        
    }
    // eats(){
    //     console.log("lion eats");
    // // ab yeh waaala eats l.eats se access hoga 
    // }
    eats(){
        super.eats()
         console.log("lion eats");

    }
}
// so lion bhi whi krta hai jo animals mai instead of pasting same syntax we jus put extend now hum ab lion se hee animal ko access kr skte hai  

let l= new lion("shera")
console.log(l);


     