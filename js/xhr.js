//**********//XHR//**********//
var xhr = function() {

	//CALL BACK FOR XHR REQUEST LOAD EVENT LISTENER//
	var addXhr = function () {
		var pojo = JSON.parse(this.responseText);
		for (var i = 0; i < pojo.messages.length; i++) {
			pojo.messages[i].time = CardTastic.getTimeStamp();
			CardTastic.setArrayItem(pojo.messages[i]);
		};
	};

	//ADDS EVENT LISTENERS FOR XHR LOAD//
	var addXhrEventListener = function(request) {
		request.addEventListener("load", addXhr);
		request.addEventListener("error", function() {
			console.log("error");
		});
	};

	//INITIALIZE XHR REQUEST//
	var load = function() {

		for (var i = 0; i < 5; i++) {
			var json = `../json/messages${i}.json`
			var loadRequest = new XMLHttpRequest();
			addXhrEventListener(loadRequest);
			loadRequest.open("GET", json);
			loadRequest.send();
		}
	}();
}();
