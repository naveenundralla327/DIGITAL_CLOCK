let hourE1 = document.querySelector(".hour");
let minuteE1 = document.querySelector(".minute");
let secondE1 = document.querySelector(".second");

// console.log(hourE1);

function updateClock() {
    let currenrDate = new Date();
    
    let hour = currenrDate.getHours();
    let minute = currenrDate.getMinutes();
    let second = currenrDate.getSeconds();

    let hourDeg = (hour / 12) * 360;
    hourE1.style.transform = `rotate(${hourDeg}deg)`;

    let minuteDeg = (minute / 60) * 360;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;

    let secondDeg = (second / 60) * 360;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;

}


setInterval(updateClock, 1000);
