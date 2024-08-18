let arr = [1,1,2,3,4,4,6] 

function  fun (arr) {
    let arr2 =[]
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i+1];
            c = 0 
            if (arr[index]==arr[index+1]) {
                 c=c+1
                   
            }
            else{
                 c=0
            } 
            
        }
        if (c>0) {
            arr2.push(arr[index]*2) 
        }
       
    }
    console.log(arr2);
    
}
fun(arr)
