class Link:
  text = ""
  link = ""
  color = ""

  def __init__(self, text, link, color):
    self.text = text
    self.color = color
    self.link = link

link = []
link.append(Link("Github", "github.com/benjiae", "overlay0"))
link.append(Link("Bluesky", "bsky.app/profile/benjae.nekoweb.org", "sapphire"))
link.append(Link("Twitter", "x.com/touhou_7", "blue"))
link.append(Link("Twitch", "twitch.tv/benjae__", "mauve"))
link.append(Link("Fedi", "akko.wtf/users/benjae", "pink"))
link.append(Link("Osu! (💔)", "osu.ppy.sh/users/11749005", "pink"))
link.append(Link("Reddit (sorry)", "reddit.com/u/benjaytn", "peach"))
link.append(Link("Youtube", "youtube.com/@Benjae_", "red"))
link.append(Link("Last.fm", "last.fm/user/benjae_", "red"))


for n in link:
  print(f'<a href="https://{n.link}" style="color: var(--{n.color})">{n.text}</a>')