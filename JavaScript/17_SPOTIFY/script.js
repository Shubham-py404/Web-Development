console.log("hello from java script");
  
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

let currentsong = new Audio()
const playMusic = (track) => {    
    currentsong.src = "http://127.0.0.1:5500/17_SPOTIFY/audio/" + track + ".mp3"
    currentsong.play();
    play.src= "logos/play.svg"
    document.querySelector(".songinfo").innerHTML=track
    document.querySelector(".songtime").innerHTML="00:00 / 00:00"

}



async function main() {
    
// get the list of all the songs
    let songs = await getSongs()
    console.log(songs);
    
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
        console.log(currentsong.currenTime,currentsong.duration);
        
    })

    //playing the songs
    // var audio = new Audio(songs[2])
    // audio.play();

    // audio.addEventListener("loadeddata",()=>{
    // let duration= audio.duration;
    // console.log(audio.duration, audio.currentSrc, audio.currentTime);
    
//    })
}
main() 



