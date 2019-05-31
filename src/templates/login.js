import {signInSubmit} from "../view.controller.js"

export default () => {
    const form = document.createElement('div');
    const formContent = `
    
    <label >Email</label>
    <input id="email"><br>
    <label >Password</label>
    <input id="password">
    <button id="btn-sign-in" type="button">Sing In</button>
    `;

    form.innerHTML=formContent;

    const singInOn = form.querySelector("#btn-sign-in");
    singInOn.addEventListener('click',signInSubmit);
 return form;
}