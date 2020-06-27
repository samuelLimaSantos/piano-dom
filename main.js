// Get all keys
const keys = document.querySelectorAll(".key");



// play  notes
function playNote(event) {
    
    // keyCode
    let audioKeyCode = getKeyCode(event);
    
    // typed or pressed key
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`);

    // if key exists
    const isKeyExists = key

    if(!isKeyExists) {
        return;
    }


    addPlayingClass(key);
    // play audio
    playAudio(audioKeyCode);
    
}

function getKeyCode(event) {
    let keyCode;


    const isKeyboard = event.type === "keydown";
    if (isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }

    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`); // Pega o arquivo de audio de acordo com o código da tecla pressionada
    audio.currentTime = 0;
    audio.play();
}

function addPlayingClass(key) {
    key.classList.add("playing");
}

function removePlayingClass(event) {
    event.target.classList.remove("playing");
}

// click with mouse
keys.forEach(key => {
    document.addEventListener("click", playNote);
    document.addEventListener("transitionend", removePlayingClass);

})
// keyboard type

window.addEventListener("keydown", playNote);