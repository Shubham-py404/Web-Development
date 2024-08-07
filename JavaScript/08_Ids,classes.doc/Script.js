console.log("shubham");


let boxes = document.getElementsByClassName("box")
// tells the Node. of div and shows the div 

console.log(boxes);
boxes[0].style.backgroundColor= "red"
// specific box ki indexing ko target kra for style kra 

document.getElementById("box3").style.backgroundColor="red"
// styling while targeting id and id is also must be unique unlike class

document.querySelector(".box").style.backgroundColor="yellow"
// only first div will be styled

console.log(document.querySelectorAll(".box"));
// we cant style all even we have a func , we have to use for each 

document.querySelectorAll(".box").forEach(e=>{
      e.style.backgroundColor="purple"
})


