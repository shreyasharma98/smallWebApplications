let x;
let fullDate;
let days = ["Monday","Tuesday","Wednesday","Thursday","friday","Saturday","Sunday"];
setInterval(() => {
    x = new Date();
    let day = x.getDay();
    fullDate = x.getHours() + ':' +  x.getMinutes() + ':' + x.getSeconds()+ " <br> on   "+days[day-1]+" , " + x.getDate() + '/' + x.getMonth() + '/' + x.getFullYear();
    document.getElementById("currentTime").innerHTML = fullDate;
}, 1000);
