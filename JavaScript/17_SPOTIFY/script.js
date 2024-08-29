console.log("hello from java script");
let currentsong = new Audio()
let songs;
let currfolder;
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


async function getSongs(folder) {
    currfolder= folder
    let a = await fetch(`http://127.0.0.1:5500/17_SPOTIFY/${folder}/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as= div.getElementsByTagName("a")
    // console.log(as);
    songs = []
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3"))  {
            let h = element.href.split(".mp3")[0]
            songs.push(h.split(`http://127.0.0.1:5500/17_SPOTIFY/${folder}/`)[1])
        }
    }
    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songUl.innerHTML= ""
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
    return songs
}


const playMusic = (track,pause= false) => {    
    currentsong.src = `http://127.0.0.1:5500/17_SPOTIFY/${currfolder}/` + track + ".mp3"
    if(!pause){
        currentsong.play();
        play.src= "logos/pause.svg"
    }  
    document.querySelector(".songinfo").innerHTML=decodeURI(track)
    document.querySelector(".songtime").innerHTML="00:00 / 00:00"
}

async function displayAlbums() {
    console.log("displaying albums")
    let a = await fetch(`http://127.0.0.1:5500/17_SPOTIFY/audio/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".CardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/audio/") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[1]
            // Get the metadata of the folder
            let a = await fetch(`http://127.0.0.1:5500/17_SPOTIFY/audio/${folder}/info.json`)
            let response = await a.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` 
            <div data-folder="${folder}"class="card">
                <div class="playy" >
                    <span class="Buttoninner">
                    <span aria-hidden="true" class="IconWrapper">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                    </span>
                    </span>
                </div>
                <img src="audio/${folder}/cover.jpeg" alt="song">
                <div class="infocont">
                    <h2>${response.title}</h2>
                    <p>${response.description}</p>
                </div>
            </div>`
        }
    }
    document.querySelector(".CardContainer").addEventListener("click",e=>{
        document.querySelector(".left").style.left=0;
    })
    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e=>{
        e.addEventListener("click", async (item)=>{
            // console.log(item.currentTarget.dataset);
            songs = await getSongs(`audio/${item.currentTarget.dataset.folder}`)
        })
    })

    // done by the chat gpt 
    Array.from(document.getElementsByClassName("playy")).forEach(e => {
        e.addEventListener("click", async (item) => {
            item.stopPropagation(); // Stop the click event from propagating to the card
            let folder = e.closest('.card').dataset.folder;
            songs = await getSongs(`audio/${folder}`);
            playMusic(songs[0]); // Play the first song
        });
    });
}

displayAlbums()
 
async function main() {
// get the list of all the songs
    await getSongs("audio")
    // console.log(songs);
    currentsong.src = songs[0]
    playMusic(songs[0],pause = true)

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
        if (currentsong.volume>0) {
            document.querySelector(".volume>img").src=document.querySelector(".volume>img").src.replace("logos/mute.svg","logos/volume.svg")
        }
        else{
            document.querySelector(".volume>img").src=document.querySelector(".volume>img").src.replace("logos/volume.svg","logos/mute.svg")
        }
    })

// add mute button
    document.querySelector(".volume>img").addEventListener("click",e=>{
        if (e.target.src.includes("logos/volume.svg")) {
            e.target.src=e.target.src.replace("logos/volume.svg","logos/mute.svg")
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value=0
        }
        else{
            e.target.src=e.target.src.replace("logos/mute.svg","logos/volume.svg")
            currentsong.volume=0.10;
            document.querySelector(".range").getElementsByTagName("input")[0].value=50 

        }
    }) 
}  

main() 

 

