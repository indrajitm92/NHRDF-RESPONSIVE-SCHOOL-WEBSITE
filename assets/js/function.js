function TimeStamp(time,date,datetime) {
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let year = dateTime.getFullYear();
    let month = dateTime.getMonth();
    let day = dateTime.getDay();
    let currentdate = dateTime.getDate();

    let session = hour >= 12 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currentmonth = monthName[month];
    
    let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let currentday = dayName[day];

    if(time){
        return `<span class = "time">${hour}:${min}:${sec} ${session}</span>`;
    }
    if(date){
        return `<span class = "date">${currentday}, ${currentdate} ${currentmonth} ${year}</span>`;
    }
    if(datetime){
        return `<span class = "datetime">${currentday},${currentmonth} ${currentdate},${year}| Current Time: ${hour}:${min}:${sec} ${session}(BST)</span>`;
    }
}