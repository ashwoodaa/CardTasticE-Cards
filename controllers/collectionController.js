

//////////////////////////////////////////////////////
//    Viewing Your Collection
////////////////////////////////////////////////////////

app
   .controller("CollectionCtrl", function($scope, $timeout, $location, cardFactory, collectionFactory, loginFactory) {
    const viewCollectionCards = this;
    viewCollectionCards.collectionId = collectionFactory.getCollectionId();
    viewCollectionCards.collectionCards = cardFactory.getCards(viewCollectionCards.collectionId);
    console.log(viewCollectionCards.collectionCards);
    viewCollectionCards.goToAddCard = () => {
      $location.path("/addCard");
      $timeout();
    };
  }); // .controller ViewCollectionCardsCtrl



