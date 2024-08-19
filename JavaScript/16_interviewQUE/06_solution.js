let str = "HELLO WORLd"
function vov(str) {
    let c=0
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        
        let k = element.toLowerCase()
        let str2= "aeiou"
        for (let i = 0; i < str2.length; i++) {
            const element = str2[i];
            if (k==element) {
                c++
            }
        }
         
    }
    console.log(c);
        
}


vov(str)

