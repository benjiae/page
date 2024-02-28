const arrow = document.getElementById("arrow")
const links = document.getElementById("link")

function toggleLinks() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
        arrow.innerHTML = " →";
    } else {

      x.style.display = "block";
      arrow.innerHTML = " ↓";
    }
  }