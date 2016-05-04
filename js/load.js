var Chatty = (function (chatty){

  var loadArray = [];

  function loadChatty () {
    var loadJsonArr = JSON.parse(this.responseText);
    loadArray = loadJsonArr.startMsg;
    initialMessages();
  };

  var infoRequest = new XMLHttpRequest();
  infoRequest.addEventListener("load", loadChatty);
  infoRequest.open("GET", "/data/startMsg.json");
  infoRequest.send();

  chatty.getLoadArray = function () {
    return loadArray;
  };

  return chatty;

}(Chatty || {}));
