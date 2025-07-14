
let settime=()=>{
let date=new Date();
let year=date.getFullYear();
let month=date.getMonth()
let day=date.getDate();
let hrs=date.getHours();
let mins=date.getMinutes();
let sec=date.getSeconds();
let millsec=date.getMilliseconds();
document.getElementsByTagName("span")[0].innerHTML=`The time is <h1>${hrs}:${mins}:${sec}:${Math.floor(millsec/100)}</h1>`;
}

setInterval(settime,100);