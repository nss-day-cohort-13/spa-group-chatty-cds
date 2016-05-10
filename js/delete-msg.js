"use strict";

var Chatty = (function (chatty){

  chatty.deleteSingleMessageFromDOM = function (id) {
    Chatty.removeArrayMessages(id);
    $("#"+id).remove();
  };

  return chatty;

}(Chatty || {}));
