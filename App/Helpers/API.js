import * as firebase from 'firebase';

const config = {
    ADD FIREBASE CREDENTIALS HERE
  };
firebase.initializeApp(config);

const db = firebase.database();

/* 
When user is authenticated, need to add `if (user != null)` in front of all functions to make sure auth

Search is basic nested SQL callback hell for now. ElasticSearch integration is available in Firebase.
 */

const searchListings = searchTerm => {
  db.ref('listings').orderByChild('food').equalTo(searchTerm.toLowercase()).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      db.ref('listings').orderByChild('category').equalTo(searchTerm.toLowercase()).once('value').then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('no results')
        }
      });
    }
  });
}

const getListing = listingId => {
  db.ref(`/listings/${listingId}`).once('value').then((snapshot) => {
    console.log(snapshot.val());
  });
}

const addListing = (type, category, food, quantity, expiration, location) => {
  db.ref('listings/').push({
    type: type.toLowercase(),
    category: category.toLowercase(),
    food: food.toLowercase(),
    quantity: quantity,
    expiration: expiration.toLowercase(),
    location: location
  });
}

const updateListing = (listingId, listingProperty, listingPropertyValue) => {
  db.ref(`/listings/${listingId}`).set({
    type: type.toLowercase(),
    category: category.toLowercase(),
    food: food.toLowercase(),
    quantity: quantity,
    expiration: expiration.toLowercase(),
    location: location
  });
}

// Uncomment this for testing
//addListing('raw', 'prepared', 'lasagna', 1, '3 days', 78759);
//getListing('-KlkioJ-lQyKpfqGxPSG');
//searchListings('prepared');

module.exports = API;
