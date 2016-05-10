"use strict";

var Chatty = (function (chatty){


var userMsgArray = [];
var idVariable = 0;

  // will add a message to both the DOM with a unique id attached and into a private array
  chatty.addMessage = function(id, message){
    if (message !== ""){
      var element = $("#"+id)[0];
      $(element).append(`<div id="${idVariable}" class="individualMessageDiv">
                         <p>${message}</p>
                         <button type="button" class="deleteButton">Delete</button>
                         </div>`);
      userMsgArray.push(message);
      idVariable++;
    }
  };

  // will remove a single message from the private array given based on the message's position in the DOM
  chatty.removeArrayMessages = function(id){
    var index = $("#"+id).index();
    userMsgArray.splice(index, 1);
  };

  // getter for private array that holds all messages
  chatty.getMsgArray = function() {
    return userMsgArray;
  };

  // will reset the private message array back to empty
  chatty.removeAllMessagesInArray = function () {
    userMsgArray = [];
  };

  return chatty;

}(Chatty || {}));

