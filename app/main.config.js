app
.config (function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'CardTasticCtrl',
        controllerAs: 'card'
    })
    .when('/collection', {
    	templateUrl: 'views/collection.html',
    	controller: 'CollectionCtrl'
    })
    .when('/contact', {
    	templateUrl: 'views/contact.html',
    	controller: 'ContactCtrl'
    })
    .when('/addCard', {
    	templateUrl: 'views/addCard.html',
    	controller: 'CardTasticCtrl',
        controllerAs: 'add'
    })
    .when('/login', {
        templateUrl: 'views/authenticate.html',
        controller: 'AuthCtrl',
        controllerAs: 'login'
      });
})

.constant ("firebase_URL", "https://cardtastic-e-cards.firebaseio.com/")

.run(["$location", function ($location) {
  firebase.initializeApp({
    apiKey: "AIzaSyBFvRtgo1UIQyzgFQxvv4E9tYFzFg31RMM",
    authDomain: "cardtastic-e-cards.firebaseapp.com",
    databaseURL: "https://cardtastic-e-cards.firebaseio.com/"
  });
}]);
