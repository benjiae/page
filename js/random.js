const text = document.getElementById("random")

text_array = [
    "i may be stupid",
    "shibayanrecords my beloved",
    "90% stolen code, 10% brain usage",
    "how are people so creative",
    "b",
    "the j",
    "google maps",
    "windows 7 crazy error HD",
    "i hate you marisa",
    "how long will it be until i get a real music taste",
    "follow @badfangametakes on twitter.com",
    "man i love catppuccin",
    "listen to toho bossa nova",
    "play iwbtg fangames",
    "speedrun portal",
    "why did i stop playing btd6 again i forgot",
    "touhou ruined my life",
    "how are people good at webdev",
    "play titanfall 2",
    "play your only move is hustle",
    "listen to glass beach",
    "te amo chile",
    ":(){ :|:& };:",
    ":3",
    "is it normal to not like [popular thing]"
]

text_array.sort(function() {return 0.5 - Math.random()})

var random_text = text_array[0]

text.innerHTML = random_text