// Faulty calculator

//  inputfuntions--
// 1.takes input 
// 2. it performs wrong operations as follows
//     +--->-
//     *--->+
//     -  ---->/
//     /--->**
//  3. performs mistakes only 10% of the times 




function choice(){
    c=prompt("enter choice")
    if (c=="1") {
        add()
    }
    else if (c=="2") {
        multiply()
    }
    else if (c=="3") {
        div()
    }
    else if (c=="4") {
        sub()
    }
    else {
        alert("wrong input")
    }
}
// add
function add(){
    let a= prompt("enter first no.")
    let b= prompt("enter second no.")
    c=Math.random()
    if (c<0.1) {
        alert(`answer`,a+b);
    }
    else{
        alert(a-b);
    }
}





// multiplication
function multiply(){
    let a= prompt("enter first no.")
    let b= prompt("enter second no.")
    c=Math.random()
    if (c<0.1) {
        alert("answer",a*b);
    } 
    else{
        j=a+b
        alert("answer",j);
    }
    
}


// subtraction

function sub(){
    let a= prompt("enter first no.")
    let b= prompt("enter second no.")
    c=Math.random()
    if (c<0.1) {
        alert("answer",a-b);
    }
    else{
        alert("answer",a/b);
    }
 
}



// divide
function div(){
    let a= prompt("enter first no.")
    let b= prompt("enter second no.")
    c=Math.random()
    if (c<0.1) {
        alert("answer",a/b);
    }
    else{
        alert("answer",a**b);
    }
}

choice()