const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => observer.observe(el))

function stickyScroll() {
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)
} 

window.onscroll = stickyScroll

function menuOpen() {
    let menuList = document.getElementById('menu-list')

    menuList.classList.toggle('retract')
    menuList.classList.toggle('expand')
}

let menu = document.getElementById('menu-icon')

menu.onclick = menuOpen