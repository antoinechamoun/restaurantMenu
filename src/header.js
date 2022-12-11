const header = document.createElement("div");
header.classList = 'header';

const ul = document.createElement("ul")
ul.className = 'nav-links'
header.appendChild(ul)

const links = ['Home','Menu','About']

links.forEach((item)=>{
    let li = document.createElement("li")
    li.className = `${item.toLowerCase()}-link`
    li.innerHTML=item
    ul.appendChild(li)
})

export {ul}
export default header;