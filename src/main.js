import {initRouter} from "./router.js"

const init=()=>{
    const firebaseConfig = {
        apiKey: "AIzaSyDIEvUz8dj8uVtCTycN0FqLGIvwpkWS7K0",
        authDomain: "usuario-18d2f.firebaseapp.com",
        databaseURL: "https://usuario-18d2f.firebaseio.com",
        projectId: "usuario-18d2f",
        storageBucket: "usuario-18d2f.appspot.com",
        messagingSenderId: "445069069824",
        appId: "1:445069069824:web:fe209fc1d32a1907"
};
firebase.initializeApp(firebaseConfig);
initRouter();
}

window.onload=init();