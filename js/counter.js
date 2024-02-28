async function counter() {
    const request = await fetch("https://nekoweb.org/api/site/info/benjae")
    const data = await request.json()
    console.log(data)
    
    document.getElementById("counter").innerHTML = data["views"]
    console.log(data["views"])
}

counter()