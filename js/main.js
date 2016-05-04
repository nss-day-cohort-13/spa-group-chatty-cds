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


// added functionality to user input message field
var userInputText = document.getElementById("user-message-input");

userInputText.addEventListener("keyup", addUserMessage);

function addUserMessage (key){
  if (key.which === 13){
    Chatty.addMessage("display-messages", userInputText.value);
    clearAllButton.removeAttribute("disabled");
  };
};


var clearAllButton = document.getElementById("clear-msg");

clearAllButton.addEventListener("click", clearAllMessages);

function clearAllMessages() {
  Chatty.removeAllMessagesInArray();
  border.innerHTML = "";
  clearAllButton.setAttribute("disabled", true);
};
