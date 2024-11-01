class Link:
  text = ""
  link = ""
  color = ""

  def __init__(self, text, link, color):
    self.text = text
    self.color = color
    self.link = link


link = []
link.append(
  Link(
    "GPG/PGP key (idk why specifically i would use it but shhh)",
    "keys.openpgp.org/vks/v1/by-fingerprint/E9C64F84D7598EE626D9AC6A44E5FFEE40CF9AEA",
    "text",
  )
)
link.append(Link("Github", "github.com/benjiae", "text"))
link.append(Link("Bluesky", "bsky.app/profile/benjae.nekoweb.org", "sapphire"))
link.append(Link("Twitter⭐", "x.com/touhou_7", "blue"))
link.append(Link("Twitch", "twitch.tv/benjae__", "mauve"))
link.append(Link("Fedi⭐", "is.phite.ro/@benjae", "mauve"))
link.append(Link("Fedi (backup)", "akko.wtf/users/benjae", "pink"))
link.append(Link("Osu! (💔)", "osu.ppy.sh/users/11749005", "pink"))
link.append(Link("Reddit (sorry)", "reddit.com/u/benjaytn", "peach"))
link.append(Link("Youtube", "youtube.com/@Benjae_", "red"))
link.append(Link("Last.fm", "last.fm/user/benjae_", "red"))


for n in link:
  print(f'<a href="https://{n.link}" style="color: var(--{n.color})">{n.text}</a>')
