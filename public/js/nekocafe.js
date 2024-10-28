const username = "benjae"; // change the username!!!
const posts_url = "https://cafe.frizzbees.dev/get_posts/1?name=";
const profile_url = "https://social.nekoweb.org/profile/?view=";
const post_url = "https://social.nekoweb.org/post/?id=";

// thanks max
(async () => {
    try {
        const request = await fetch(posts_url + username,);
        let json = await request.json();
        json = json[0]

        timestamp = json["timestamp"] * 1000
        time = new Date(timestamp).toUTCString();
    
        div = document.getElementById("nekocafe")
        
        div.innerHTML = `
            <h2>Nekocafé status</h2>
            <p id="nekocafe-text"><a href="${post_url + json["id"]}">${json["post"]}</a></p>
            <p id="nekocafe-time">${time}</p>
        ` // make sure the height on the img fits your page!!!

    } catch (error) {
        console.error(error)
    }
})();