const stars = document.querySelectorAll(".stars")

stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
        for(let i=0; i <= index ;i++){
           stars[i].classList.add("active");
        }
    })

    star.addEventListener("mouseout", () => {
       
        for(let i=0; i < stars.length ;i++){
           
           stars[i].classList.remove("active");
        }
       
    })

    star.addEventListener("click", () => {
        alert(index + 1 )
    })
})

