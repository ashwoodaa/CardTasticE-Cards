/******************Dark Theme and Large Text Functionality************/

var webpage = document.getElementsByTagName("body")[0];

var CardTastic = function(object) {


	var darkThemeCheck = document.getElementById("dark-theme");
	darkThemeCheck.addEventListener("click", darkify);

	function darkify () {

	// removeClasses();
	webpage.classList.toggle("makeDark");
	}

	var lightThemeCheck = document.getElementById("light-theme");
	lightThemeCheck.addEventListener("click", lightify);

	function lightify () {

	// removeClasses();
  	webpage.classList.toggle("makeLight");
	}

	var romanticThemeCheck = document.getElementById("romantic-theme");
	romanticThemeCheck.addEventListener("click", romantify);

	function romantify () {

	// removeClasses();
  	webpage.classList.toggle("makeRomantic");
	}


  //RETURNS AN OBJECT WITH A METHOD ATTACHED//
  return object;


//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(CardTastic || {});

