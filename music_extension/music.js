document.addEventListener("DOMContentLoaded", () => {
    var song = ""
    document.getElementById("evil").checked = true

    document.getElementById("evil").addEventListener("click", () => {
        song = "music/evil morty.mp3"
        document.getElementById("bang").checked = false
     })
 
     document.getElementById("bang").addEventListener("click", () => {
         song = "music/Chitty Chitty Bang Bang.mp3"
         document.getElementById("evil").checked = false
      })
    
    document.getElementById("button_start").addEventListener("click", () => {
        chrome.runtime.sendMessage({"requestType": "play",
                                    "song": song});
    })

    document.getElementById("button_stop").addEventListener("click", () => {
        chrome.runtime.sendMessage({"requestType": "pause",
                                    "song": song});
    })
})