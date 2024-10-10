class Link:
  text = ""
  link = ""
  color = ""

  def __init__(self, text, link):
    self.text = text
    self.link = link

link = []
link.append(Link("A twitter and bluesky bot!!", "github.com/benjiae/fangametakesbot"))
link.append(Link("this page!!!", "benjae.nekoweb.org"))
link.append(Link("A gd tool!!", "github.com/benjiae/gd-icon-swapper"))
link.append(Link("spotify-currentsong but with last.fm!!", "github.com/benjiae/lastfm-currentsong"))

for n in link:
  print(f'<a href="{n.link}">{n.text}</a>')