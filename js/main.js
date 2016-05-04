var darkTheme = document.getElementById('color-theme');
var border = document.getElementById('display-messages');

document.getElementById("input-toggle").addEventListener("click", function() {
  darkTheme.classList.toggle("theme");
  });
document.getElementById("input-toggle").addEventListener("click", function() {
  border.classList.toggle("msg-white");
  });

