var darkTheme = document.getElementById('color-theme');
var border = document.getElementById('display-messages');

document.getElementById("input-toggle").addEventListener("click", function() {
  darkTheme.classList.toggle("theme");
  });
document.getElementById("input-toggle").addEventListener("click", function() {
  border.classList.toggle("msg-white");
  });


// function that fills the DOM with initial JSON messages, it is called in the load.js file after the load event is completed
function initialMessages (){
  var initialMessageArray = Chatty.getLoadArray();

  for (i =0; i < initialMessageArray.length; i++){
  Chatty.addMessage("display-messages", initialMessageArray[i]);
  };
};
