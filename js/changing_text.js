let i = 0;
window.setInterval(function() {
    message = ["Currently listening to:", "Last played song:"];
    
    document.getElementById("current").innerHTML = message[i];
    i++;
    if(i == 2) {
        i = 0
    }
}, 3000);