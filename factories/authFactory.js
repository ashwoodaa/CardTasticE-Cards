app
  .factory('LoginFactory', ($location, $timeout) => {
    let userId;
    let token;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userId = user.uid;
      user.getToken()
        .then(t => token = t)
        // this '/collection' file path is unsure
        .then($location.path.bind($location, '/collection'))
        .then($timeout)
    }
  })
    return {
      login (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
      },
      register (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
      },
      logout () {
        return firebase.auth().signOut();
      },
      getUserData () {
        return {user: userId, authToken: token};
      }
    }
  })
