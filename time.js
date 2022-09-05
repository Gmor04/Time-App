let date = new Date()


let gethr = document.querySelector("#gethr")
let getmins = document.querySelector("#getmins")
let getsecs = document.querySelector("#getsecs")

let secs = date.getSeconds()
let mins = date.getMinutes()
let hrs = date.getHours()


gethr.innerHTML = hrs
getmins.innerHTML = mins

function timee() {
    getsecs.innerHTML = secs++

}

// setTimeout(timee, 1000)

function tttime() {
    getsecs.innerHTML = secs++
    if (secs > 59) {
        secs = 0
        mins++
        getmins.innerHTML = mins
        
    }
}

setInterval( tttime
    , 1000
)