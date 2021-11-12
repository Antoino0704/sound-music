var audio = new Audio("music/evil morty.mp3");
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if(message == "play") {
            audio.play();
        }
        else if(message == "pause") {
            audio.pause();
        }
    }
)