"use strict";

var Chatty = (function (chatty){


  var darkTheme = $("#color-theme");
  var $border = $("#display-messages");
  var $largeTheme = $("#color-theme");
  var $userInputText = $("#user-message-input");
  var $clearAllButton = $("#clear-msg");

  // toggle classes for dark theme and large theme checkboxes
  $("#input-toggle").click(function() {
    darkTheme.toggleClass("theme");
    $border.toggleClass("msg-white");
    });

  $("#large-toggle").click(function() {
    $largeTheme.toggleClass("large");
  });


    // function that fills the DOM with initial JSON messages,
    // it is called in the load.js file after the json is loaded
    chatty.initialMessages = function (content){
    var initialMessageArray = content;

    $(initialMessageArray).each(function (index, currentMessage){
      Chatty.addMessage("display-messages", currentMessage);
    });
  };


  // tests text input field for "enter" key press;
  // if pressed it passes the text input to the addMessage function and clears the text field
  $userInputText.keyup(addUserMessage);

  function addUserMessage (key){
    if (key.which === 13){
      Chatty.addMessage("display-messages", $userInputText.val());
      $clearAllButton.removeAttr("disabled");
      $userInputText.val("");
    }
  }


  //when "Clear Message Board" button is pressed,
  // all messages are removed from the DOM and private array, and the button is disabled
  $clearAllButton.click(clearAllMessages);

  function clearAllMessages() {
    Chatty.removeAllMessagesInArray();
    $border.empty();
    $clearAllButton.attr("disabled", true);
  }


  // when "Delete" button is pressed,
  // the parent div is removed from the DOM, removing the message and delete button;
  // also checks for divs on the page and disables "Clear Message Board" button if empty
  $border.click(deleteButtons);

  function deleteButtons (event) {
    if (event.target.className === "deleteButton") {

      Chatty.deleteSingleMessageFromDOM(event.target.parentNode.id);
      if ($border.html() === "") {
        $clearAllButton.attr("disabled", true);
      }
    }
  }


  return chatty;

}(Chatty || {}));
