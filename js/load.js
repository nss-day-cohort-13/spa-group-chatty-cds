function loadChatty () {
  var loadJsonArr = JSON.parse(this.responseText);
  console.log(loadJsonArr);
};

var infoRequest = new XMLHttpRequest();

infoRequest.addEventListener("load", loadChatty);
infoRequest.open("GET", "/data/startMsg.json");
infoRequest.send();