const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft; // find out the initial position of user's click!
    scrollLeft = slider.scrollLeft;
})

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");

})

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");

})

slider.addEventListener("mousemove", (e) => {
    if(!isDown) return;  // stop function from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft; // find out the cursor position on each mouse move
    const deviation = (x - startX) * 3; // how far we have deviated from initial mouse click / point
    slider.scrollLeft = scrollLeft - deviation;
})


