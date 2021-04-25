let x;
let fullDate;
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","friday","Saturday"];
setInterval(() => {
    x = new Date();
    let day = x.getDay();
    let month = x.getMonth()+1;
    fullDate = x.getHours() + ':' +  x.getMinutes() + ':' + x.getSeconds()+ " <br> on   "+days[day]+" , " + x.getDate() + '/' + month + '/' + x.getFullYear();
    document.getElementById("currentTime").innerHTML = fullDate;
}, 1000);
