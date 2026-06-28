#!/usr/bin/env python
import json
import requests

def fetch_image(img: str):
    req = requests.get(img)
    if req.status_code != 200:
        print("Request failed, " + req.status_code)
        exit()
    image = (req.content)
    return image


with open("buttons.json", "r") as buttons:
    data = json.loads(buttons.read())
    for button in data:
        img = button["img"]
        if img.startswith("https://"):
            image = fetch_image(img)
