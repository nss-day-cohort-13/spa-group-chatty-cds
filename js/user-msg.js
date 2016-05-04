var Chatty = (function (chatty){

// One IIFE should contain a function that accepts an element id, and the user message,
// and then add the user's message - along with the delete button - to the specified parent element.
// Each message should be stored in a private array in this IIFE.
// This IIFE should also expose a function to read all messages, and delete a single message.

var userMsgArray = [];
var idVariable = 0;

  chatty.addMessage = function(id, message){
    var element = document.getElementById(id);
    element.innerHTML += `<div id="${idVariable}"><p>${message}</p><button type="button">Delete</button></div>`;
    userMsgArray.push(message);
    idVariable++;
  };

  chatty.removeArrayMessages = function(id){
    var child = document.getElementById(id);
    var parent = child.parentNode;
    var index = userMsgArray.indexOf.call(parent.children, child);
    userMsgArray.splice(index);
  };


  return chatty;

}(Chatty || {}));

