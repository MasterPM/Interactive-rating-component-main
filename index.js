const cardcontainer = document.querySelector(".card-container")
const thanksContainer = document.querySelector(".thank-contianer")
const submitbtn = document.getElementById("submit")
const rateAgain = document.getElementById("rateAgain")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rate-btn")

submitbtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    cardcontainer.style.display = "none" 
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    cardcontainer.style.display = "block" 
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
        // console.log(rate.innerHTML)
    })
})