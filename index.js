// Aim: Creating a drum-set that outputs sound on clicking and on receiving keyboard presses


const drums = document.querySelectorAll(".drum");
// console.log(drums);

// document.onload=drums.map(drum=>);

function handleClick(e){
    let char = e.target.innerText;
    // console.log(char);
    decideSound(char);
}

function playSound(sound){
    const audio = new Audio(sound);
    audio.play();

}

for (let i = 0; i < drums.length; i++) {
    let drum = drums[i];
    drum.addEventListener("click", (e) =>handleClick(e));
}

function decideSound(char){
    let sound = ""
    switch(char){
        case "w":
            sound = "./sounds/tom-1.mp3"
            break;
        case "a":
            sound = "./sounds/tom-2.mp3"
            break;
        
        case "s":
            sound = "./sounds/tom-3.mp3"
            break;

        case "d":
            sound = "./sounds/tom-4.mp3"
            break;

        case "j":
            sound = "./sounds/snare.mp3"
            break;
        
        case "k":
            sound = "./sounds/crash.mp3"
            break;
        
        case "l":
            sound = "./sounds/kick-bass.mp3"
            break;
        
        default:
            break;
    }
    playSound(sound);
}

const body = document.querySelector("body");

body.addEventListener("keypress", e =>handlePress(e));

function handlePress(e){
    // console.log(e.key)
    let key = e.key;
    decideSound(key);

}


