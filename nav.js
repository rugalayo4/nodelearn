function myFunction() {
    var x = document.getElementById("nave");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }