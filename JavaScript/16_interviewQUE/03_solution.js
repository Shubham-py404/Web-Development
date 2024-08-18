let str1 = "shubham"
let str2=""
function rev(str1) {
    
    for (let i = str1.length-1; i>-1; i--) {
        const element = str1[i];
        str2= str2+ str1[i]
    }
    console.log(str2);
    
}
rev(str1)

