app.factory('cardFactory', function($http){
	let lines = null;
	return {
		getLines(string) {
			return $http
			.get("https://cardtastic-e-cards.firebaseio.com/" + string + "/.json")
			.then(function(response){
			return response.data
			}) .then(function(t) {
				lines = t;
				return lines;
			}) // this pulls my lines and compliments for me
		}, //getLines(string)
		saveCards(object) {//passing it an object (savedObject)
			return $http
			.post("https://cardtastic-e-cards.firebaseio.com/" + object + "/.json")
			.then(function(response) {

			return response.data
			})
		}, //saveCards
       getCards(collectionId){
        console.log(collectionId);
        let collectionCards = []
        $http
          .get(`${firebase_URL}/cards.json?auth=${loginFactory.getUserData().authToken}`)
          .then(response => {
            const allCards = response.data
            console.log(allCards)
            for (var card in allCards) {
              console.log(allCards[card].collectionIDs);
                if (allCards[card].collectionIDs === collectionId) {
                  collectionCards[collectionCards.length] = allCards[card];
                }
            }
          });
        return collectionCards;
      }
	} //return
})