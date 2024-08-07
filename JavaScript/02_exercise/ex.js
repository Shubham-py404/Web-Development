// Business name generator by combining list of adjectives 
// and shop and another word 


// adjectives-
// Crazy 
// amazing 
// fire 

// Shop name :
// engine 
// foods 
// Garments 


// Another word --
// bros 
// limited 
// hub


function adj(){
    let r=Math.random()
    if (r<=0.33) {
        p='crazy' 
        return p 
    }
    else if (0.33<r && r<0.66) {
        p='Amazing'
        return p 
    }
    else{
        p='fire'
        return p
    }
}
adj()


function SN(){
    let r=Math.random()
    if (r<=0.33) {
        q='engine'
        return q 
    }
    else if (0.33<r && r<0.66) {
        q='foods'
        return q 
    }
    else{
        q='Garments'
        return q
    }
}
SN()

function AW(){
    let r=Math.random()
    if (r<=0.33) {
        z='bros '
        return z 
    }
    else if (0.33<r && r<0.66) {
        z='Limited'
        return z 
    }
    else{
        z='hub'
        return z
    }
}
AW()

console.log("Name :",p+" "+q+" "+z)

