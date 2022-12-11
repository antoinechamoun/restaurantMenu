const home = document.createElement("div")
home.className = "home"

const menuButton = document.createElement('button')
menuButton.className = "btn"
menuButton.innerText = 'View menu'

home.appendChild(menuButton)

export default home