let a ="cappuccino"
let r = Math.floor(Math.random()*8)
async function brewCoffee(a,r) {
    return new Promise((resolve, reject) => {
        if (a=="cappuccino") {
            setTimeout(() => {
                console.log('brewing your coffee .......');
                setTimeout(() => {
                    resolve("Your cappuccino is ready!")
                }, r*1000);
            }, 2000);
        }
    })
}
async function hell() {
    const rem = await brewCoffee(a,r)
    console.log(rem);
}
hell()