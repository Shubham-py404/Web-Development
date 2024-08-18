

let student = ["gojo satoru ", "itadori yuji","tanjiro kamado","Doremon ","bhot bada naam ","yuta","shubham"]




let houses = []
for (let i = 0; i < student.length; i++) {
    const names = student[i];
    if (names.length<6) {
        console.log(houses.push(` ${names.length} ${names} assigns to the Gryffindor`));   
    }
    else if (names.length<8) {
        console.log(houses.push(names,names.length,"assigns to the Hufflepuff"));
    } 
    else if (names.length<12) {
        console.log(houses.push(names,names.length,"assigns to the Ravenclaw"));
    } 
    else {
        console.log(houses.push(names,names.length,"assigns to the Slytherin"));
    } 
}
console.log(houses);
