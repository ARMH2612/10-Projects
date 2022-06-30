
function countDown(){
    const newBirthday = new Date('26 Dec 2022');
    const currentDate = new Date();

    const totalSeconds = (newBirthday - currentDate)/1000

    const days = Math.floor(totalSeconds / 3600 / 24) +1
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) %60
    const seconds = Math.floor(totalSeconds)%60

    const idDay = document.getElementById('days')
    idDay.innerHTML = formatTime(days)
    const idHours = document.getElementById('hours')
    idHours.innerHTML = formatTime(hours)
    const idMinutes = document.getElementById('minutes')
    idMinutes.innerHTML = formatTime(minutes)
    const idSeconds = document.getElementById('seconds')
    idSeconds.innerHTML = formatTime(seconds)



    // console.log(days);
    // console.log(newBirthday, currentDate, newBirthday - currentDate);
}
// initial call
// countDown()

function formatTime(time){
    return time< 10 ? (`0${time}`) : time
}

setInterval(countDown, 1000)