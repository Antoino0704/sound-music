document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("button_start").addEventListener("click", function() {
        chrome.runtime.sendMessage("play");
    })

    document.getElementById("button_stop").addEventListener("click", function() {
        chrome.runtime.sendMessage("pause");
    })
})




