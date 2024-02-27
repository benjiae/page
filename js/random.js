const text = document.getElementById("random")

text_array = ["follow @badfangametakes on twitter.com", "man i love catppuccin", "listen to toho bossa nova!", "play iwbtg fangames!", "speedrun Portal!", "why did i stop playing btd6 again i forgot", "touhou ruined my life", "how are people good at webdev", "play titanfall 2", "play your only move is hustle", "listen to glass beach", "te amo chile", ":(){ :|:& };:", ":3", "is it normal to not like [popular thing]"]

text_array.sort(function() {return 0.5 - Math.random()})

var random_text = text_array[0]

text.innerHTML = random_text