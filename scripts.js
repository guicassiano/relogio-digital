const divHours = document.getElementById("hours")
const divMinutes = document.getElementById("minutes")
const divSeconds = document.getElementById("seconds")

const clock = ()=>{
    const date = new Date()

    let hours = date.getHours()
    hours = (hours < 10 ? "0"+hours : hours)

    let minutes = date.getMinutes()
    minutes = (minutes < 10 ? "0"+minutes : minutes)

    let seconds = date.getSeconds()
    seconds = (seconds < 10 ? "0"+seconds : seconds)

    divHours.innerText = hours
    divMinutes.innerText = minutes
    divSeconds.innerText = seconds
}

setInterval(clock,1000)