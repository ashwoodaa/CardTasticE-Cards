//**********//ARRAY MANAGER//**********//
var CardTastic = function(object) {

	//DECLARES DOM ELEMENT VARIABLE//
	var output = document.getElementById("messages");

	//DECLARES MAIN ARRAY FOR CHAT BLOCK OBJECTS//
	var messages = [];


	//FORMATS CHAT DIV HTML GIVEN AN ARRAY//
	var contentBuilder = function(array) {
		var content = '';
		var i = 0;
		if(array.length > 20) {
			i = (array.length - 20)
		};
		for (i; i < array.length; i++) {
			content += (
				`<li class="chatBlock" index="${i}">`+
				`<p class="chatUser">${array[(i)].user}:</p><p class="chatText">${array[(i)].text}</p>`+
				`<p class="timeStampValue">${array[i].time}</p>` +
				`<button class="editButton" value="Edit">Edit</button>`+
				`<button class="deleteButton" value="Delete">Delete</button>`+
				`</li>`
				);
		};
		return content;
	};

	//WRITES GIVEN ARRAY TO THE MESSAGES DIV//
	object.writeToDom = function(array, elem) {
		elem.innerHTML = contentBuilder(array);
		CardTastic.addDeleteButtonEventListeners();
		CardTastic.addEditButtonEventListeners();
		if(document.getElementById("messages").innerHTML == '') {
			var clearBoard = document.getElementById("clearBoard");
			clearBoard.setAttribute('disabled', '');
		};
	};

	//METHOD ADDS AN OBJECT TO THE END OF THE MESSAGES ARRAY//
	object.setArrayItem = function(object) {
		messages[messages.length] = object;
		CardTastic.writeToDom(messages, output);
	};

	//METHOD RETURNS MESSAGES ARRAY//
	object.getArray = function() {
		return messages;
	};

	//METHOD SETS MESSAGES ARRAY//
	object.setArray = function(array) {
		messages = array;
		CardTastic.writeToDom(messages, output);
	};

	//RETURNS AN OBJECT WITH A METHOD ATTACHED//
	return object;

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(CardTastic || {});
