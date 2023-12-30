const aside = document.querySelector("aside")
const overlay = document.querySelector(".overlay")
const bars = document.querySelector(".fa-bars")

bars.addEventListener("click", () => {
    overlay.classList.add("active")
    aside.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    aside.classList.remove("active")
})