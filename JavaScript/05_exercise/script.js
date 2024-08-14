function createcard(thumbnail,duration,title,cName,views,monthsold){
    let viewstr
    if (views<1000000) {
         viewstr= views ;
    }
    else if (views>1000000) {
         viewstr= views/1000000 + "M";
    }
    else{
         viewstr=views/1000 + "k";
    }
    let html = `<div class="secContainer">
        <div class="thumbnail">
          <img
            src="${thumbnail}"
            alt="thumbnail"
          />
          <div class="dur">${duration}</div>
        </div>
        <div class="smallflex">
          <div class="title"><h1>${title} </h1></div>
          <p>${cName}  .${viewstr} views   .${monthsold} ago </p>
        </div>
      </div>`
      
document.querySelector(".container").innerHTML= html
}

createcard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxR2Iy74ubFQvvf2uP0BepdJ_GNw","12:11","How to make a Youtube Video Card in HTML with the help of CSS and JavaScript | by shubham | code with shubham ","CodeWIthShubham",75000000,"6 months")


