(()=>{"use strict";const e=document.createElement("div");e.classList="header";const n=document.createElement("ul");n.className="nav-links",e.appendChild(n),["Home","Menu","About"].forEach((e=>{let a=document.createElement("li");a.className=`${e.toLowerCase()}-link`,a.innerHTML=e,n.appendChild(a)}));const a=e,s=document.createElement("div"),i=document.createElement("p");s.className="about-container",i.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod",s.appendChild(i);const t=s,l=document.createElement("div");l.className="home";const c=document.createElement("button");c.className="btn",c.innerText="View menu",l.appendChild(c);const m=l,d=document.createElement("div");d.className="menu";const o=document.createElement("div");o.className="menu-container",[{name:"Cappuccino",image:"images/cappuccino.jpg"},{name:"Special Coffee",image:"images/coffee-special.jpg"},{name:"Espresso",image:"images/espresso.jpg"},{name:"Italian coffee",image:"images/italian.jpg"},{name:"Nescafe",image:"images/nescafe.jpg"},{name:"Coffee",image:"images/coffee.jpg"}].forEach((e=>{const n=document.createElement("div");n.className="item-menu";const a=document.createElement("p");a.className="title",a.innerText=e.name,n.style.backgroundImage=`url(${e.image})`,n.appendChild(a),o.appendChild(n)})),d.appendChild(o);const u=d,p=document.getElementById("content");p.appendChild(a),p.appendChild(m),n.childNodes[0].className+=" active",window.addEventListener("click",(e=>{"About"===e.srcElement.innerText&&(p.innerHTML="",n.childNodes[0].className="home-link",n.childNodes[1].className="menu-link",n.childNodes[2].className+=" active",p.appendChild(a),p.appendChild(t)),"Home"===e.srcElement.innerText&&(p.innerHTML="",n.childNodes[2].className="about-link",n.childNodes[1].className="menu-link",n.childNodes[0].className+=" active",p.appendChild(a),p.appendChild(m)),"View menu"!==e.srcElement.innerText&&"Menu"!==e.srcElement.innerText||(p.innerHTML="",n.childNodes[0].className="home-link",n.childNodes[2].className="about-link",n.childNodes[1].className+=" active",p.appendChild(a),p.appendChild(u))}))})();