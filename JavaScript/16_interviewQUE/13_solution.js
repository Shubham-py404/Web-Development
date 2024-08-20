let prod = ["maggie","tomato","capsicum","onion"]
let price = [14,70,50,40]
let qty= [3,2,1,2]
function calculateTotal(prod,price,qty) {
    let c = 0
    let dict = {}
    for (let i = 0; i < prod.length; i++) {
        const element = prod[i];
        let m= price[i]*qty[i]
        dict[element]=m
        c=c+m
    }
    dict["total"]=c
    console.log(dict);
}
calculateTotal(prod,price,qty)
