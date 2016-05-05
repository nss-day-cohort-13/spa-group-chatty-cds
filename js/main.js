var Chatty = (function (chatty){

  var darkTheme = document.getElementById('color-theme');
  var border = document.getElementById('display-messages');
  var largeTheme = document.getElementById('color-theme');

  document.getElementById("input-toggle").addEventListener("click", function() {
    darkTheme.classList.toggle("theme");
    });
  document.getElementById("input-toggle").addEventListener("click", function() {
    border.classList.toggle("msg-white");
    });
  document.getElementById("large-toggle").addEventListener("click", function() {
    largeTheme.classList.toggle("large");
  });

  // function that fills the DOM with initial JSON messages, it is called in the load.js file after the load event is completed
    chatty.initialMessages = function (){
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
      userInputText.value = "";
    };
  };

  //functionality for the Clear Message Board button
  var clearAllButton = document.getElementById("clear-msg");

  clearAllButton.addEventListener("click", clearAllMessages);

  function clearAllMessages() {
    Chatty.removeAllMessagesInArray();
    border.innerHTML = "";
    clearAllButton.setAttribute("disabled", true);
  };

  // functionality for the individual message delete buttons
  border.addEventListener("click", deleteButtons);

  function deleteButtons (event) {
    if (event.target.className === "deleteButton") {
      var idToDelete = event.target.parentNode.id;

      Chatty.deleteSingleMessageFromDOM(idToDelete);
      if (border.innerHTML === "") {
        clearAllButton.setAttribute("disabled", true);
      };
    };
  };

  return chatty;

}(Chatty || {}));
