import{addNote, deleteNote,singIn} from './controller/controller-firebase.js';

const changeHash=(hash)=>{
    location.hash=hash;
}

export const signInSubmit=()=>{
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    singIn(email,password)
    .then(()=> changeHash('/Notes'))
    .catch(()=>{})
}
