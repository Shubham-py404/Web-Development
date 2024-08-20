let arr1= ["headphone","watches","buds","phone","powerbank"]
function filterProducts(arr1) {
    let fil = ["headphone","watches","phone","powerbank"]
    let arr2 = []
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        for (let i = 0; i < fil.length; i++) {
            const element1 = fil[i];
            if (element==element1) {
                arr2.push(element)
            }
        }
    }
    console.log(arr2);
    
    
}
filterProducts(arr1)