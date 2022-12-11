const menu = document.createElement("div")
menu.className = 'menu'

const menuContainer = document.createElement("div")
menuContainer.className = "menu-container"

const menuList = [
    {name:"Cappuccino", image:'images/cappuccino.jpg'},
    {name:"Special Coffee", image:'images/coffee-special.jpg'},
    {name:"Espresso", image:'images/espresso.jpg'},
    {name:"Italian coffee", image:'images/italian.jpg'},
    {name:"Nescafe", image:'images/nescafe.jpg'},
    {name:"Coffee", image:'images/coffee.jpg'}
]

menuList.forEach((item)=>{
    const itemMenu = document.createElement("div")
    itemMenu.className = "item-menu"
    const title = document.createElement('p')
    title.className = 'title'
    title.innerText = item.name
    itemMenu.style.backgroundImage = `url(${item.image})`
    itemMenu.appendChild(title)
    menuContainer.appendChild(itemMenu)
})

menu.appendChild(menuContainer)

export default menu




