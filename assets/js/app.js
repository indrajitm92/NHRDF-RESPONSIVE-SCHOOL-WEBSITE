document.addEventListener('DOMContentLoaded',() => {
    // timestamp show js
    let timestamp = document.querySelector('.timestamp');
    timestamp.innerHTML = TimeStamp(false,false,true);
    setInterval(() => {
        timestamp.innerHTML = TimeStamp(false,false,true);
    }, 1000);

    /// toggle button
    let toggleBtn = document.getElementById('toggle_btn');
    toggleBtn.onclick = () => {
        let menu = document.querySelector(".nav_item ul");
        menu.classList.toggle("active");

        let icon = document.querySelector(".toggle_btn .icon");
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-bars-staggered");
        } else {
            icon.classList.remove("fa-bars-staggered");
            icon.classList.add("fa-bars");
        }
    }

    // sticky header
let headerBottom = document.querySelector('.header_bottom');
let headerBottomHeight = headerBottom.offsetTop + headerBottom.offsetHeight;
window.addEventListener('scroll',() => {
    if (window.scrollY > headerBottomHeight) {
        headerBottom.classList.add('fixed');
    } else {
        headerBottom.classList.remove('fixed');
    }
})


    
});
