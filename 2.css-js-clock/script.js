function setDate(){
    let hands = document.querySelectorAll('.hand');
    let secondHand = document.querySelector('.sec-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hr-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    if(seconds === 0) hands.forEach(h => h.classList.remove('transition'))

    const secondsDegree = seconds * (360/60) + 90;
    const minutesDegree = minutes * (360/60) + 90;
    const hoursDegree = hours * (360/12) + 90;

    secondHand.style.transform = `translateY(-50%) rotate(calc(${secondsDegree}deg))`;
    
    minuteHand.style.transform = `translateY(-50%) rotate(calc(${minutesDegree}deg))`;
    
    hourHand.style.transform = `translateY(-50%) rotate(calc(${hoursDegree}deg))`;

    if(seconds !== 0) hands.forEach(h => h.classList.add('transition'))
}

setInterval(setDate, 1000);