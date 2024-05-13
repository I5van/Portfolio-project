let burgerImage = document.querySelector("#burger-img")
let burgerContent = document.querySelector("#burger-content")
let closeButton = document.querySelector(".close-button")
    function burgerDisappear(){
        burgerContent.classList.remove("burger-active")
    }
    closeButton.onclick=burgerDisappear
 function burgerClick(){

    burgerContent.classList.add("burger-active")
 }
burgerImage.addEventListener("click",burgerClick)