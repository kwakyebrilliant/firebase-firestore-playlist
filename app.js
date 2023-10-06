//refrence
const cafeList = document.querySelector('#cafe-list');

// create element & render cafe
function renderCafe(doc){

    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');


}

//getting collections
db.collection('cafes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});