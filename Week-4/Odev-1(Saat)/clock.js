// prompt ile kullanıcıdan adı alınır.
let userName = prompt("Adınız nedir?")
let myName = document.querySelector("#myName")
// kullanıcı bilgi girilmediyse "İsimsiz" yazsın.
myName.innerHTML = `${userName.length > 0 ? userName : "İsimsiz"}`

function time() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let dayNumber = now.getDay();
    // Sunday - Saturday : 0 - 6
    let day=[`Pazar`, `Pazartesi`, `Salı`, `Çarsamba`, `Perşembe`, `Cuma`, `Cumartesi`]
    let dayName=day[dayNumber]
    let clock = document.querySelector("#myClock")
    clock.innerHTML = `${hour}:${minute}:${second} ${dayName}`
}

//her 1 sn güncelleme alır:
setInterval(time, 1000);