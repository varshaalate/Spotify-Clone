console.log("Welcome to spotify");


// Intialize Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");


let songs=[

    {songName:"Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"}, {songName:"Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"}, {songName:"Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"}, {songName:"Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"}, {songName:"Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"}, {songName:"Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"}, {songName:"Salam-e-Ishq", filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},

    
]

let audio = new Audio('1.mp3');


// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
                gif.style.opacity = 1;

        
    }
    else{
         masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


//LIsten To events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log("Time Update");

    // Update Seekbar
});