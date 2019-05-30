

export default () => {
    const form = document.createElement('div');
    const formContent = `
    
    <label >Email</label>
    <input id="email">
    <label >Password</label>
    <input id="password">
    <button id="btn-sign-in" type="button">Sing In</button>
    `;

    form.innerHTML=formContent;

 return form;
}