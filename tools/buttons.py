from math import ceil
import random


class Button:
  img = ""
  href = ""
  alt = ""

  def __init__(self, href, img, alt):
    self.img = img
    self.href = href
    self.alt = alt


button = []
current = 0
started_top = 0
started_bottom = 0

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

button.append(
  Button(
    "https://tengu.space",
    "/assets/buttons/dev.png",
    "tengu.space",
  )
)


button.append(
  Button(
    "https://gra.phite.ro",
    "https://gra.phite.ro/badge.png",
    "gra.phite.ro",
  )
)

button.append(
  Button(
    "https://lunakitpi.pages.gay/",
    "/assets/buttons/LunaBTN.png",
    "luna",
  )
)

button.append(
  Button(
    "https://lunahd.neocities.org/",
    "https://lunahd.neocities.org/assets/88x31/me.png",
    "miku",
  )
)

button.append(
  Button(
    "https://akko.wtf",
    "/assets/buttons/akkowtf.png",
    "Luna Nova",
  )
)

button.append(
  Button(
    "https://jadedesoto.pages.gay",
    "/assets/buttons/jadedesoto.png",
    "Jade",
  )
)

button.append(
  Button(
    "https://sugar.pages.gay/",
    "/assets/buttons/sugar.gif",
    "sugar's serene place",
  )
)

button.append(
  Button(
    "https://winter.entities.org.uk",
    "https://winter.entities.org.uk/buttons/self.png",
    "winter :3"
  )
)

button.append(
  Button(
    "",
    "/assets/buttons/sween.png",
    "tim sweeney stretched to fit the 88x31 resolution",
  )
)

random.shuffle(button)

for n in button:  # top
  if started_top == 0:
    print("<div id=buttons_top>")
    started_top = 1
  if current % 2 == 0:
    if n.href != "":
      print(
        f'<a href="{n.href}"><img src="{n.img}" width=88 height=31 alt="{n.alt}"></a>'
      )
    else:
      print(f'<img src="{n.img}" width=88 height=31 alt="{n.alt}">')
  current += 1

for n in button:  # bottom
  if started_bottom == 0:
    print("</div>")
    print("<div id=buttons_bottom>")
    started_bottom = 1
  if current % 2 == 0:
    if n.href != "":
      print(
        f'<a href="{n.href}"><img src="{n.img}" width=88 height=31 alt="{n.alt}"></a>'
      )
    else:
      print(f'<img src="{n.img}" width=88 height=31 alt="{n.alt}">')
  current += 1
print("</div>")


print("----------------")
print(f"css row width: {88*ceil(current/4) + ceil(current/4)*6}")
print(f"total buttons: {current/2}")
print(f"total buttons per row: {current/4}")
print(f"raw width: {ceil(current/4) * 88}")
print(f"raw padding: {ceil(current/4) * 6}")
