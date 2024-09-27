// i stole this from https://tepiloxtl.net/lastfmws.js?v2, like i only modified some lines, everything else is from that
let socket = new WebSocket("wss://scrobbled.tepiloxtl.net/ws/get_last_track/benjae_");

let _artist
let _song

socket.onopen = function(e) {
    console.log("[open] Connection established");
};

socket.onmessage = function(event) {
    // console.log(`[message] Data received from server: ${event.data}`);
    data = JSON.parse(event.data)

    lastfm = document.getElementById("lastfm")
    lastfm.innerHTML = `
    <p id="nowplaying"></p>
    <p><span id="artist" style="color: #a6e3a1"></span><br>-<br><span id="song" style="color: #a6e3a1"></span></p>
    <p id="albumart"></p>
`

    // convert to variables
    _artist = data['recenttracks']['track'][0]['artist']['name']
    _song = data['recenttracks']['track'][0]['name'] + "</b>";

    // insert on html elements
    song.innerHTML = _song
    artist.innerHTML = _artist
    // Album art comes in 3 sizes, from 0 - smallest, to 3 - biggest, change here \ /
        albumart.innerHTML = "<img src='" + data['recenttracks']['track'][0]['image']['1']['#text'] + "' />"
    // This check is changed since last version, its easier now
    if (data['recenttracks']['track'][0]['nowplaying'] == 'true') {
        nowplaying.innerHTML = "I'm now listening to:"
    } else {
        nowplaying.innerHTML = "I last listened to:"
    }
};

socket.onclose = function(event) {
    if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
        console.log('[close] Connection died');
    }
};

socket.onerror = function(error) {
    console.log(`[error]`);
};