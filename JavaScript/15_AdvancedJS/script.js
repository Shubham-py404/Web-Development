async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}



( async function main(){
    // let  a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);


    // destucturing--
    // array mai 2 variable assign honge = ke baad waale elements ko 
    let [x,y,  ...rest] =[1,5,45,4,5]
    // . represent krega ki rest kitne vari hold krega... means three var
    console.log(x,y,rest);
 
    let obj = {
        a:2,
        b:3,
        c:4
    }
    let {a,b} = obj 
    console.log(a,b);
    

    function sum (a,b,c){
        return a + b + c
    }
    let arr = [1,2,3]
    console.log(sum(...arr));
    
})()




