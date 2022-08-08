const openMenuBtn = document.querySelector("#openBtn")
const closeMenuBtn = document.querySelector("#closeBtn")

const openMobileMenu = () =>{
    document.querySelectorAll(".content").forEach(item => {
        item.style.display = "none"})
        document.querySelector(".mobile-menu").style.display = "block"   
}

const closeMobileMenu = () =>{
    document.querySelectorAll(".content").forEach(item => {
        item.style.display = "block"})
        document.querySelector(".mobile-menu").style.display = "none"   
}
openMenuBtn.addEventListener("click", openMobileMenu)

closeMenuBtn.addEventListener("click", closeMobileMenu)