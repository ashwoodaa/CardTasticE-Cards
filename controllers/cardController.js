
app
    .controller("CardTasticCtrl", function($scope, $location, $timeout, cardFactory, loginFactory, collectionFactory) {
    const t = this; // "t" can be anything.
    t.title = "CardTastic E-Card";
    t.to = "";
    t.from = "";
    t.personalizedTextBox = "";
    t.lineArray = [];

    t.pickUpLineGenerator = function() {
    	console.log("pickUpLineRunning");
    	cardFactory.getLines("PickUpLines").then(function(lines) {
    		t.lines = lines;
    		for(key in lines) {
    			t.lineArray.push(lines[key])
    		}
    		t.personalizedTextBox = t.lineArray[Math.floor(Math.random() * t.lineArray.length)];
    	})
    }
    t.complimentGenerator = function() {
    	cardFactory.getLines("Compliments").then(function(lines) {
    		t.lines = lines;
    		for(key in lines) {
    			t.lineArray.push(lines[key])
    		}
    		t.personalizedTextBox = t.lineArray[Math.floor(Math.random() * t.lineArray.length)];
    	})
    }
    const collectionId = collectionFactory.getCollectionId();

    var savedObject = {
    	title: t.title,
    	to: t.to,
    	from: t.from,
    	personalizedTextBox: t.personalizedTextBox
    }

    t.addCard = (id) => {
    	console.log("id", id);
      // const userId = loginFactory.getUserData().user;
      // const userToken = loginFactory.getUserData().authToken;
      const url = addNewCard.url;
      console.log(addNewCard.url);
      const title = addNewCard.title;
      cardFactory.addCard(userId, userToken, collectionId, url, title)
      .then($location.path.bind($location, '/collection'))
      .then($timeout)
    };
}) // .controller CardTasticCtrl

//////////////////////////////////////////////////////
//    adding new card
 ////////////////////////////////////////////////////////

//we will have an ng-click on the submit button,DONE function that I run will be in the controller with the saved object that function is going
//to call another function in the card factory.then I am going to pass the saved object to it. the function in the factory is going
// to post the object to firebase.

  // .controller("AddNewCardCtrl", function(t, $location, $timeout, cardFactory, loginFactory, collectionFactory) { //put in loginFactory

 //x }) //.controller("AddNewCardCtrl"

