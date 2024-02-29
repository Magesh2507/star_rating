const stars = document.querySelectorAll(".stars")
const text = document.querySelector(".text")
const app = document.querySelector(".app")
const popup = document.querySelector(".popup")
const closeBtn = document.querySelector(".close-btn")
const popupMessage = document.querySelector(".popup-message")

const emojis = ["I hate it &#128545;", "I dont like it &#128543;", "I like it &#128522;", "I love it &#128526;", " It is awesome &#128525;"]
let greetings = "";
stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
        for(let i=0; i <= index ;i++){
           stars[i].classList.add("active");
           text.innerHTML = emojis[i];
           greetings = i+1;
        }
    })

    star.addEventListener("mouseout", () => {
        text.innerHTML = "";
        for(let i=0; i < stars.length ;i++){
           
           stars[i].classList.remove("active");
        }
       
    })

    star.addEventListener("click", () => {
        app.style.display = 'none';
        popup.style.display = 'flex';
        popupMessage.innerHTML = `Thanks for the ${greetings}-star rating &#128525; `;
    })
})

closeBtn.addEventListener("click", () => {
    app.style.display = 'flex';
    popup.style.display = 'none';
    popupMessage.innerHTML = '';
})
