let x;
let fullDate;
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","friday","Saturday"];
setInterval(() => {
    x = new Date();
    let day = x.getDay();
    console.log(day);
    fullDate = x.getHours() + ':' +  x.getMinutes() + ':' + x.getSeconds()+ " <br> on   "+days[day]+" , " + x.getDate() + '/' + x.getMonth() + '/' + x.getFullYear();
    document.getElementById("currentTime").innerHTML = fullDate;
}, 1000);
