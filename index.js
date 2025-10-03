let menu = document.getElementById("menu")
let navlink = document.getElementById("navlink")
let close = document.getElementById("closeBtn")

menu.addEventListener('click',()=>{
    navlink.classList.toggle('show')
})

close.addEventListener('click',()=>{
    navlink.classList.remove('show')
})