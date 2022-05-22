var audio
var check = false

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
        if(message.requestType == "play") {
            if(check && !audio.paused) {
                audio.pause();
            }
            audio = new Audio(message.song)
            audio.play()
            check = true
        }
        else if(message.requestType == "pause") {
            audio.pause()
            check = false
        }
    }
)