consoleText();

function consoleText() {
  var visible = true;
  var con = document.getElementById("console");

  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore underscore-hidden"
      visible = false;
    } else {
      con.className = "console-underscore"
      visible = true;
    }
  }, 600)
}