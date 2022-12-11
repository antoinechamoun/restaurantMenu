import header from "./header";
import about from "./about";
import home from "./home";
import menu from "./menu";
import { ul } from "./header";

const container = document.getElementById("content");
container.appendChild(header)
container.appendChild(home)
ul.childNodes[0].className += ' active'
//handle functions
const handleRoutes = (e) => {
    if(e.srcElement.innerText === 'About'){
        container.innerHTML=""
        ul.childNodes[0].className = 'home-link'
        ul.childNodes[1].className = 'menu-link'
        ul.childNodes[2].className += ' active'
        container.appendChild(header)
        container.appendChild(about)
    }
    if(e.srcElement.innerText === 'Home'){
        container.innerHTML=""
        ul.childNodes[2].className = 'about-link'
        ul.childNodes[1].className = 'menu-link'
        ul.childNodes[0].className += ' active'
        container.appendChild(header)
        container.appendChild(home)
    }
    if(e.srcElement.innerText === "View menu" || e.srcElement.innerText==='Menu'){
        container.innerHTML=""
        ul.childNodes[0].className = 'home-link'
        ul.childNodes[2].className = 'about-link'
        ul.childNodes[1].className += ' active'
        container.appendChild(header)
        container.appendChild(menu)
    }
}

window.addEventListener("click", handleRoutes)