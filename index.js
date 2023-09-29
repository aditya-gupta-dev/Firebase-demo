const { firebaseCredentials } = require('./config');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const app = initializeApp(firebaseCredentials);
const firestore = getFirestore(app);

const todos = collection(firestore, 'todos');

async function init() {
    const snapShot = await getDocs(todos);
    
    console.log(`Total ${snapShot.size} todos`);

    snapShot.forEach(query => {
        console.log(query.data().name);
    });
}

init();