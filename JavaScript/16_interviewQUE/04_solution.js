function validator(pass) {
    let [a,b,d,c]= [0,0,0,0]
    for (let i = 0; i < pass.length; i++) {
        const element = pass[i];
        if (pass[i]>="A" && pass[i]<="Z") {
            a++
        }
        if (pass[i]>="a" && pass[i]<="z") {
            b++
        }   
        if (pass.length>=8) {
            d=d+1
        }
        if (pass[i]>="0" && pass[i]<="9" ) {
            c++
        }
    }
    
    if (a>0 && b>0 && c>0 && d>0) {
        console.log('password verified');
        
    }
    else{
        console.log("invalid pass");
        
    }
}
let pass = "hubhamB"


validator(pass)

