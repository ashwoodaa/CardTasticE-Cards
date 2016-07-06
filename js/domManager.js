//**********//DOM MANAGER//**********//
var CardTastic = function(object) {

	//DECLARES DOM ELEMENT VARIABLES//
	var messagesDiv = document.getElementById("messages");
	var enterMessage = document.getElementById("enterMessage");
	var clearCard = document.getElementById("clearCard");
	var userRadio = document.getElementsByClassName("userRadio");
	var textAreaForCard = document.getElementById("textAreaForCard");

	enterMessage.addEventListener("keypress", function(event){
		console.log("logging enterMessage event", enterMessage.value );
		textAreaForCard.innerHTML = enterMessage.value;
		console.log("textAreaForCard", textAreaForCard );

	});

	//CLONES TARGET ELEMENT AND REPLACES OLD WITH NEW IN THE DOM//
	var cloneNode = function(oldElem) {
		var newElem = oldElem.cloneNode(true);
		oldElem.parentNode.replaceChild(newElem, oldElem);
	};

	//RETURNS VALUE OF CHECKED USER RADIO BUTTON//
	var findUserRadioChecked = function() {
		for (var i = 0; i < userRadio.length; i++) {
			if(userRadio[i].checked === true) {
				return userRadio[i].value;
			};
		};
	};

	// //CALLBACK FOR ENTER MESSAGE EVENT LISTENER//
	// var enterMessageCallback = function(event) {
	// 	if (event.which === 13 && enterMessage.value !== "") {
	// 		console.log("CardTastic.getTimeStamp()" ,CardTastic.getTimeStamp())
	// 		var message = {user: findUserRadioChecked(), text: event.target.value, time: CardTastic.getTimeStamp()};
	// 		CardTastic.setArrayItem(message);
	// 		event.target.value = '';
	// 	};
	// };

	//CALLBACK FOR EDIT ENTER MESSAGE EVENT LISTENER//
	var editEnterMessageCallback = function(event, index) {
		console.log("fjfjf", event, index );
		if (event.which === 13 && enterMessage.value !== "") {
			var message = {user: findUserRadioChecked(), text: event.target.value};
			event.target.value = '';
			cloneNode(enterMessage);
			enterMessage = document.getElementById("enterMessage");
			var newArray = CardTastic.getArray();
			newArray.splice(index, 1, message);
			CardTastic.setArray(newArray);
		};
	};

	//CALLBACK FOR CLEAR Card EVENT LISTENER//
	var clearCardCallback = function() {
		var chatBlock = document.getElementsByClassName("chatBlock");
		for (var i = 0; i < chatBlock.length; i++) {
			chatBlock[i].innerHTML = '';
		};
		CardTastic.setArray([]);
	};

	//CALLBACK FOR EDIT BUTTON EVENT LISTENERS//
	var editButtonCallback = function(event) {
		cloneNode(enterMessage);
		enterMessage = document.getElementById("enterMessage");
		enterMessage.focus();
		enterMessage.value = event.target.parentNode.querySelector(".chatText").innerText;
		addEditEnterMessageEventListener(event.target.parentNode.getAttribute("index"));
	};

	//CALLBACK FOR DELETE BUTTON EVENT LISTENERS//
	var deleteButtonCallback = function(event) {
		var newArray = CardTastic.getArray();
		newArray.splice(event.target.parentNode.getAttribute("index"), 1);
		CardTastic.setArray(newArray);
	};
// ***************************************************
//***************************************************
//((((((((((((((((((((((((((((()))))))))))))))))))))))))))))
//EVENT LISTENERS NOT WORKING
//***************************************************
//***************************************************

	// //ADDS EVENT LISTENER FOR ENTER MESSAGE INPUT//
	// var addEnterMessageEventListener = function() {
	// 	enterMessage.addEventListener("keypress", enterMessageCallback);
	// }();

	//ADDS EVENT LISTENER FOR EDIT ENTER MESSAGE INPUT//
	var addEditEnterMessageEventListener = function(index) {
		console.log("addEditEnterMessageEventListener", index);
		enterMessage.addEventListener("keypress", function(event) {
			editEnterMessageCallback(event, index);
		});
	};

	//ADDS EVENT LISTENER FOR CLEAR Card BUTTON//
	var addClearCardEventListener = function() {
		clearCard.addEventListener("click", clearCardCallback);
	}();

	//METHOD ADDS EVENT LISTENERS FOR EDIT BUTTONS//
	object.addEditButtonEventListeners = function() {
		var editButton = document.getElementsByClassName("editButton");
		for (var i = 0; i < editButton.length; i++) {
			editButton[i].addEventListener("click", editButtonCallback);
		};
	};

	//METHOD ADDS EVENT LISTENERS FOR DELETE BUTTONS//
	object.addDeleteButtonEventListeners = function() {
		var deleteButton = document.getElementsByClassName("deleteButton");
		for (var i = 0; i < deleteButton.length; i++) {
			deleteButton[i].addEventListener("click", deleteButtonCallback);
		};
	};

	//RETURNS AN OBJECT WITH A METHOD ATTACHED//
	return object;

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(CardTastic || {});
