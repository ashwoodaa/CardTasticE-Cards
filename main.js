angular.module('app', ['ngRoute', 'ui.bootstrap'])
  .constant('firebase_URL', 'https://pied-piper-5ad6b.firebaseio.com/')
firebase.initializeApp({
    apiKey: "AIzaSyBFvRtgo1UIQyzgFQxvv4E9tYFzFg31RMM",
    authDomain: "cardtastic-e-cards.firebaseapp.com",
    databaseURL: "https://cardtastic-e-cards.firebaseio.com/"
  });
