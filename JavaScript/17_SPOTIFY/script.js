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
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return  songs
     
}
async function main(params) {
// get the list of all the songs
    let songs = await getSongs()
    console.log(songs);
    
    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + song;
    }
    //playing the songs
    var audio = new Audio(songs[3])
    // audio.play();

    audio.addEventListener("loadeddata",()=>{
    let duration= audio.duration;
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
    
   })
}
main() 



