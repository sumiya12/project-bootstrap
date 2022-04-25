const header = new XMLHttpRequest();
header.onreadystatechange = function () {
  const navbar = document.querySelector("#navbar");
  navbar.innerHTML = this.responseText;
};
header.open("GET", "/navbar.html", true);
header.send();
