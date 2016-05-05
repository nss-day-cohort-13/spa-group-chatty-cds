var Chatty = (function (chatty){

  chatty.deleteSingleMessageFromDOM = function (id) {
    Chatty.removeArrayMessages(id);
    var divToDelete = document.getElementById(id);
    divToDelete.parentNode.removeChild(divToDelete);
  };

  return chatty;

}(Chatty || {}));
