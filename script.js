const hamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".nav-list")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navList.classList.toggle("show");
})

document.querySelectorAll(".nav-list__element").forEach(n => n.
    addEventListener("click",() => {
        hamburger.classList.remove("show");
        navList.classList.remove("show");
    }))

    function header(){
        var header= document.querySelector("header")
    
        header.classList.toggle("sticky", window.scrollY > 0)
    }

function togglePopup (){
    document.getElementById("popup-1").classList.toggle("active")
}