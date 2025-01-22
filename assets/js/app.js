document.addEventListener('DOMContentLoaded',() => {
    // timestamp show js
    let timestamp = document.querySelector('.timestamp');
    timestamp.innerHTML = TimeStamp(false,false,true);
    setInterval(() => {
        timestamp.innerHTML = TimeStamp(false,false,true);
    }, 1000);
});