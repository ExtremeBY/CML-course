window.addEventListener('load', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact-info-container").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "about_us.xml", true);
    xhttp.send();
  });
  