
const secondHand = document.querySelector('.second-hand');
const hourHand   = document.querySelector('.hour-hand');
const mintHand   = document.querySelector('.min-hand');
const miliHand   = document.querySelector('.milisec-hand');
function setDate() {
	const now = new Date();

	const second = now.getSeconds();
	const secondDegrees = ((second / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    /*console.log(second);*/


    const mint = now.getMinutes();
    const mintDegrees = ((mint / 60) * 360) + 90;
    mintHand.style.transform = `rotate(${mintDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    /*const mili = now.getMilliseconds();
    console.log(mili);
    const miliDegrees = ((mili / 60) * 360) + 90;
    mintHand.style.transform = `rotate(${miliDegrees}deg)`;*/
   

}
setInterval(setDate,1000);