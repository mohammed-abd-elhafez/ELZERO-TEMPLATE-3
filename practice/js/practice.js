// // "use strict"
// let videoBtn = document.querySelector(".video-btn");
// let myVideo = document.querySelector(".my-video");

// videoBtn.addEventListener("click", playPause());

// function playPause() { 
//     if (myVideo.paused) {
//         myVideo.play();
//         videoBtn.innerHTML = "Pause";
//         }
//     else  {
//         myVideo.pause(); 
//         videoBtn.innerHTML = "Play";
//         }
// }

// let theVideo = document.querySelector(".my-video");
// let videoBtn = document.querySelector(".video-btn");

let theVideo = document.getElementById("my-video");
let videoBtn = document.getElementById("video-btn");

videoBtn.addEventListener("click", videoPlay())

function videoPlay() {
    if (theVideo.pause) {
        theVideo.play();
        // videoBtn.textContent = "pause"
    } else {
        theVideo.pause();
        // videoBtn.textContent = "play"
    }
}
// why my code is not working?