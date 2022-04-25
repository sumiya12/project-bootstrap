const footer = new XMLHttpRequest();
footer.onreadystatechange = function () {
  const navbar = document.querySelector("#navbar");
  navbar.innerHTML = this.responseText;
};
xhr.open("GET", "/navbar.html", true);
xhr.send();
