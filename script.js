const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft; // find out the initial position of user's click!
    console.log(startX);
})

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");

})

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");

})

slider.addEventListener("mousemove", () => {
    if(!isDown) return;  // stop function from running
})


