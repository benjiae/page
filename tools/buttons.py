class Button:
  img = ""
  href = ""
  alt = ""

  def __init__(self, href, img, alt):
    self.img = img
    self.href = href
    self.alt = alt


button = []
button.append(
  Button(
    "https://frizzbees.dev", "https://i.frizzbees.dev/lF4Cr7AY7xVk.png", "frizzbees.dev"
  )
)
button.append(
  Button(
    "https://nekoweb.org",
    "https://nekoweb.org/assets/buttons/button11.gif",
    "Nekoweb, the net is for the cats",
  )
)
button.append(
  Button(
    "https://max.nekoweb.org",
    "https://max.nekoweb.org/images/button.png",
    "max's apartment",
  )
)
button.append(
  Button(
    "https://social.nekoweb.org",
    "https://social.nekoweb.org/images/nekowebcafe.png",
    "Nekoweb Cafe",
  )
)

for n in button:
  print(
    f'<a href="{n.href}"><img src="{n.img}" class="buttons" width=88 height=31 alt="{n.alt}"></a>'
  )
