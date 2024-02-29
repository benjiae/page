const arrow = document.getElementById("arrow")
const links = document.getElementById("link")

function toggleLinks() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        $(x).slideUp()
        arrow.innerHTML = " →";
    } else {

      $(x).slideDown()
      arrow.innerHTML = " ↓";
    }
  }