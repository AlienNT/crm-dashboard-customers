import './public/assets/css/main.scss'

const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar-col')

document.onclick = e => {
    if (e.target.closest('.sidebar')) {
        e.preventDefault()
    }
    if (e.target.closest('.burger')) {
        toggleNavigation()
    }
    if (e.target.closest('.navigation-list__item')) {
        navActions()
    }
    if (e.target.classList.contains('sidebar-col')) {
        hideNav()
    }
}
window.onload = () => {
    setViewportHeight()
}
window.onresize = () => {
    setViewportHeight()
}

function setViewportHeight() {
    document.documentElement.style.setProperty('--vh', window.innerHeight + 'px')
}

function toggleNavigation() {
    burger.classList.contains('active') ? hideNav() : showNav()
}

function showNav() {
    sidebar.classList.add('active')
    burger.classList.add('active')
    document.body.classList.add('disable-scroll')
}

function hideNav() {
    sidebar.classList.remove('active')
    burger.classList.remove('active')
    document.body.classList.remove('disable-scroll')
}

function navActions(e) {
    console.log('navActions', e)
    hideNav()
}