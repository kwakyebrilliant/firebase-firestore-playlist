//refrence
const cafeList = document.querySelector('#cafe-list');

// create element & render cafe


//getting collections
db.collection('cafes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
});