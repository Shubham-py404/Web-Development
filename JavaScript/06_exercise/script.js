let html
async function first() {
    let r = (Math.floor(Math.random()*7)+1)*1000
    setTimeout(() => {
        fir =  `<div>Intializig Hacking.......</div>`
        document.querySelector(".container").innerHTML= fir
        setTimeout(() => {
            fir =  `<div>Intializig Hacking.</div>`
        document.querySelector(".container").innerHTML=fir
        }, 1000);
        setTimeout(() => {
            fir =  `<div>Intializig Hacking..</div>`
        document.querySelector(".container").innerHTML=  fir  
        }, 2000);
        setTimeout(() => {
            fir =  `<div>Intializig Hacking...</div>`
        document.querySelector(".container").innerHTML=  document.querySelector(".container").innerHTML+ fir  
        }, 3000);
    }, 1000);

} 
async function second() {
    let r = (Math.floor(Math.random()*7)+1)*1000
    // let g= await first()
        setTimeout(() => {
            sec=  `<div>Reading your files.......</div>`
            document.querySelector(".container").innerHTML=  sec
            setTimeout(() => {
                sec =  `<div>Reading your files.</div>`
            document.querySelector(".container").innerHTML=sec
            }, 1000);
            setTimeout(() => {
                sec =  `<div>Reading your files..</div>`
            document.querySelector(".container").innerHTML= sec  
            }, 2000);
            setTimeout(() => {
                sec =  `<div>Reading your files...</div>`
            document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML+ sec 
            }, 3000);
        }, 4000);
}
async function third() {
    let r = (Math.floor(Math.random()*7)+1)*1000
    // let g= await second()
        setTimeout(() => {
            thir =  `<div>Protected files Detected......</div>`
            document.querySelector(".container").innerHTML=  thir
            setTimeout(() => {
                thir =  `<div>Protected files Detected.</div>`
            document.querySelector(".container").innerHTML=thir
            }, 1000);
            setTimeout(() => {
                thir =  `<div>Protected files Detected..</div>`
            document.querySelector(".container").innerHTML=  thir  
            }, 2000);
            setTimeout(() => {
                thir =  `<div>Protected files Detected...</div>`
            document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML+ thir  
            }, 3000);
        }, 8000);
}
async function fourth() {
    let r = (Math.floor(Math.random()*7)+1)*1000
    // let g= await third()
        setTimeout(() => {
           four =  `<div>Sending all passwords personal files to server.....</div>`
            document.querySelector(".container").innerHTML=four
            setTimeout(() => {
                four =  `<div>Sending all passwords personal files to server.</div>`
            document.querySelector(".container").innerHTML=four
            }, 1000);
            setTimeout(() => {
                four =  `<div>Sending all passwords personal files to server..</div>`
            document.querySelector(".container").innerHTML=  four  
            }, 2000);
            setTimeout(() => {
                four =  `<div>Sending all passwords personal files to server...</div>`
            document.querySelector(".container").innerHTML=  document.querySelector(".container").innerHTML+  four  
            }, 3000);
        }, 12000);
}
async function fifth() {
    let r = (Math.floor(Math.random()*7)+1)*1000
    // let g= await fourth()
        setTimeout(() => {
            fif =  `<div>Cleaning Up.......</div>`
            document.querySelector(".container").innerHTML=  fif
            setTimeout(() => {
                fif =  `<div>Cleaning Up.</div>`
            document.querySelector(".container").innerHTML=fif
            }, 1000);
            setTimeout(() => {
                fif =  `<div>Cleaning Up..</div>`
            document.querySelector(".container").innerHTML=  fif  
            }, 2000);
            setTimeout(() => {
                fif =  `<div>Cleaning Up...</div>`
            document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML+ fif  
            }, 3000);
        }, 15000);
}
first()
second()
third()
fourth()
fifth()