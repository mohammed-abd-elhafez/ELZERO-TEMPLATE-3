let megaMenuBtn = document.querySelector(".show-mega-menu");
let megaMenu = document.querySelector(".mega-menu");

// megaMenuBtn.addEventListener("click", () => {
// // megaMenu.style.color = "red";
// // megaMenu.style.backgroundColor = "red";
// megaMenu.style.opacity = "-1";
// })

let UpBtn = document.querySelector(".up-page");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 900) {
    UpBtn.style.display = 'block' 
    } else if (window.scrollY <= 800) {
        UpBtn.style.display = 'none'    
    }

})

  

UpBtn.addEventListener("click", () => {
    // window.scrollTo ({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth"
    // })
    // OR
    window.scrollTo (0, 0)
})

let timeSeconds = document.querySelector(".time-seconds");
let timeMinutes = document.querySelector(".time-minutes");
let timeHours = document.querySelector(".time-hours");
let timeDays = document.querySelector(".time-days");
let videoPlay = document.querySelector(".video");
let videoPause = document.querySelector(".the-unit");

    videoPause.addEventListener("click", () => {
        videoPlay.style.display = "none";
    });
    
let sCount = setInterval(secondsCount, 1000)

function secondsCount () {
timeSeconds.innerHTML -= 1;

if (timeSeconds.innerHTML === "0") {
    clearInterval(sCount);

    videoPlay.style.display = "block";
    videoPlay.play();

    let mCount = setInterval (minutesCount, 60000);
    function minutesCount () {
        timeMinutes.innerHTML -=1;
        if (timeMinutes.innerHTML === "0") {
        clearInterval(mCount);
       
     
        // hours function call
        let hCount = setInterval(hoursCount, 3600000)
        function hoursCount () {
       timeHours.innerHTML -= 1;
        if (timeHours.innerHTML === "0") {
            clearInterval(hCount);

            // days count call
            let dCount =  setInterval(daysCount, 86400000)
            function daysCount () {
                timeDays.innerHTML -= 1;
                if (timeDays.innerHTML === "0") {
                    clearInterval(dCount)
                }
            }
        }
}
        }
    }
}
}








