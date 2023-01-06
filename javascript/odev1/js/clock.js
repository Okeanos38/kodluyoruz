let myName = document.getElementById("myName");
let getName =   prompt("İsminizi Girin : ");
let myClock = document.getElementById("myClock");

if(getName.length <= 0) {
    alert("Boş Bırakılamaz !");
    console.log("Boş Bırakılamaz !");
    location.reload();
}else {    
    myName.innerHTML = `${getName}`;
}

function showTime() {
    var days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let date = new Date();

    let hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day= date.getDay();
    myClock.innerHTML = hour + ":" + min + ":" + sec + " " + days[day];
}

setInterval(showTime,1000);