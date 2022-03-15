setInterval(setClock,1000);

const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setClock() {  
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() * 6;
    const minutesRatio = (currentDate.getMinutes()*360/60);
    const hoursRatio = (minutesRatio/60 + currentDate.getHours()*30);

    
    
    // CSSをそれぞれのrationの割合に変更する
    // console.log(secondsRatio)
    console.log(currentDate.getMinutes())
    console.log(minutesRatio/(360*12/60))
    console.log(currentDate.getHours())
    // console.log(hoursRatio)

    // console.log(hoursRatio)
    secondHand.style.transform = `rotate(${secondsRatio}deg)`
    minuteHand.style.transform = `rotate(${minutesRatio}deg)`
    hourHand.style.transform = `rotate(${hoursRatio}deg)`

}

// elementのcss（--rotation)の値を変更するためのfunction
// function setHoursRotation(element, rotationRatio)  {  
// element.style.setProperty('--rotation', rotationRatio * 360);
// }



    

setClock();
