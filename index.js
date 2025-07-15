
let settime=()=>{
let date=new Date();
let year=date.getFullYear();
let month=date.getMonth()
let day=date.getDate();
let hrs=date.getHours();
let mins=date.getMinutes();
let sec=date.getSeconds();
let millsec=date.getMilliseconds();
let dayObj={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June"}
document.getElementsByTagName("span")[0].innerHTML=`The time is <h1>${hrs}:${mins}:${sec}:${Math.floor(millsec/100)}</h1>`;
document.getElementsByTagName("day")[0].innerHTML=`${day} ${dayObj[month]} ${year}`;
}
setInterval(settime,100);