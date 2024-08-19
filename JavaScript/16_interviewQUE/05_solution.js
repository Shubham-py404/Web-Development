let arr = [1,2,3,5,-5,5]

function sum(arr) {
    c=0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element>0) {
            c= c+element
        }
        else{
            break
        } 
    }
    console.log(c);
    
}
sum(arr)
