import * as Firebase from 'firebase';

Firebase.initializeApp({
    apiKey: "AIzaSyCOCFZ2r77E190SxpC0F2aqy6JygcE1xpQ",
    authDomain: "bounti-5f992.firebaseapp.com",
    databaseURL: "https://bounti-5f992.firebaseio.com",
    projectId: "bounti-5f992",
    storageBucket: "bounti-5f992.appspot.com",
    messagingSenderId: "894037078076"
});

export const db = Firebase.database();

/*
When user is authenticated, need to add `if (user != null)` in front of all functions to make sure auth

Search is basic nested SQL callback hell for now. ElasticSearch integration is available in Firebase.
 */

export const searchListings = searchTerm => {
  db.ref('listings').orderByChild('food').equalTo(searchTerm.toLowerCase()).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      db.ref('listings').orderByChild('category').equalTo(searchTerm.toLowerCase()).once('value').then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('no results')
        }
      });
    }
  });
}

export const getListing = listingId => {
  db.ref(`/listings/${listingId}`).once('value').then((snapshot) => {
    console.log(snapshot.val());
  });
}

export const getAllListings = () => new Promise((resolve, reject) => {
  db.ref('/listings/').once('value').then((snapshot) => {
    if (snapshot.exists()) {
      resolve(snapshot.val());
    } else {
      reject(Error('No results from database.'));
    }
  });
});

export const addListing = (type, category, food, quantity, expiration, location) => {
  db.ref('listings/').push({
    type: type.toLowerCase(),
    category: category.toLowerCase(),
    food: food.toLowerCase(),
    quantity: quantity,
    expiration: expiration.toLowerCase(),
    location: location
  });
}

export const updateListing = (listingId, listingProperty, listingPropertyValue) => {
  db.ref(`/listings/${listingId}`).set({
    type: type.toLowerCase(),
    category: category.toLowerCase(),
    food: food.toLowerCase(),
    quantity: quantity,
    expiration: expiration.toLowerCase(),
    location: location
  });
}

// Uncomment this for testing
//addListing('raw', 'prepared', 'lasagna', 1, '3 days', 78759);
//getListing('-KlkioJ-lQyKpfqGxPSG');
//searchListings('prepared');

//module.exports = API;
