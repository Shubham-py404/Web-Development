console.log("hello from java script");
let currentsong = new Audio()
let songs;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getSongs() {

    let a = await fetch("http://127.0.0.1:5500/17_SPOTIFY/audio/")
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as= div.getElementsByTagName("a")
    console.log(as);
    let songs = []
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3"))  {
            let h = element.href.split(".mp3")[0]
            songs.push(h.split("http://127.0.0.1:5500/17_SPOTIFY/audio/")[1])
        }
    }
    return songs
}


const playMusic = (track,pause= false) => {    
    currentsong.src = "http://127.0.0.1:5500/17_SPOTIFY/audio/" + track + ".mp3"
    if(!pause){
        currentsong.play();
        play.src= "logos/pause.svg"
    }

  
    document.querySelector(".songinfo").innerHTML=decodeURI(track)
    document.querySelector(".songtime").innerHTML="00:00 / 00:00"

}



async function main() {
    
// get the list of all the songs
    songs = await getSongs()
    // console.log(songs);
    currentsong.src = songs[0]
    playMusic(songs[0],pause = true)

    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `
        <li>
            <img src="logos/music.svg" alt="">
            <div class="info">
                <div>${song.replaceAll("%20"," ")}</div>
                <!-- <div>song artist</div> -->
            </div>
            <div class="playnow">
                <span>Now Playing</span>
                <img  class="invert play2" src="logos/play.svg" alt="">
            </div>
        </li>`;
    }


// attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click",element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    });
 
// attach an event listener t play next an previous  
    play.addEventListener("click",()=>{
        if(currentsong.paused){
            currentsong.play()
            play.src="logos/pause.svg"
            
        }
        else{
            currentsong.pause()
            play.src="logos/play.svg"
        }
    })


//listen for time update event
    currentsong.addEventListener("timeupdate",()=>{
        document.querySelector(".songtime").innerHTML=`${secondsToMinutesSeconds(currentsong.currentTime)}/${ secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";  
      })

//adding event listener to the seekbar

    document.querySelector(".seekbar").addEventListener("click",e=>{
        let TP= (e.offsetX/e.target.getBoundingClientRect().width)*100 
        document.querySelector(".circle").style.left = TP + "%"
        currentsong.currentTime=  ((currentsong.duration)*TP)/100        
    })

// add a event ;istener in hamburger
    document.querySelector(".ham").addEventListener("click",e=>{
        document.querySelector(".left").style.left=0;
    })
    document.querySelector(".close").addEventListener("click",e=>{
        document.querySelector(".left").style.left=-120+"%";
    })


// add a event listener to the prev and forwardet buttons
    prev.addEventListener("click", () => {
        let index1 = songs.indexOf(currentsong.src.split("/").slice(-1)[0].replace(".mp3", ""));
        if (index1 > 0) {
            playMusic(songs[index1 - 1]);
        } else {
            playMusic(songs[songs.length - 1]); // Go to the last song if on the first song
        }
    });

    next.addEventListener("click", () => {
        let index1 = songs.indexOf(currentsong.src.split("/").slice(-1)[0].replace(".mp3", ""));
        if (index1 < songs.length - 1) {
            playMusic(songs[index1 + 1]);
        } else {
            playMusic(songs[0]); // Go to the first song if on the last song
        }
    });

// add an event to volume 
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
        currentsong.volume=parseInt(e.target.value)/100
        
    })

}
main() 



