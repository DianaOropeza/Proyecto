import Login from './templates/login.js';
import Notes from './templates/notes.js' 

const changTmp = (hash)=>{
    if(hash==="/#" || hash===""|| hash==="#"){
        return viewTmp('#singIn');
    }
    else if(hash==="#/SingIn" ||hash==="#/Notes"){
        return viewTmp(hash);
    }
    else return viewTmp("#/SingIn");
}

const viewTmp = (routers)=>{
 const router=routers.substr(2, routers.length-2)
 const root = document.getElementById('root');
 root.innerHTML='';
 switch(router){
     case 'Notes':
     root.appendChild(Notes());
     break;
     
     case'SingIn':
     root.appendChild(Login());
     break;

     default:
     root.appendChild(Login());
     break;
 }
}

export const initRouter=()=>{ 
 window.addEventListener('load',changTmp(window.location.hash))
    if(("onhashchange" in window)) window.onhashchange=()=>changTmp(window.location.hash)
}