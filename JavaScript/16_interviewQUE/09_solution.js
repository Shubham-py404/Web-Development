let r = Math.floor(Math.random()*8)
async function placeOrder(r) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Placing  your Order.......');
            setTimeout(() => {
                resolve("Order Confirmed!")
            }, r*1000);
        }, 2000);
        
    })
}
async function hell() {
    const rem = await placeOrder(r)
    console.log(rem);
}
hell()