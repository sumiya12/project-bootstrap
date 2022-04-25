const footer = new XMLHttpRequest();
footer.onreadystatechange = function () {
  const navbar = document.querySelector("#footer");
  navbar.innerHTML = this.responseText;
};
footer.open("GET", "/footer.html", true);
footer.send();
