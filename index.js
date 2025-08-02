
let settime=()=>{
let date=new Date();
let year=date.getFullYear();
let month=date.getMonth()+1;
let day=date.getDate();
let hrs=date.getHours();
let mins=date.getMinutes();
let sec=date.getSeconds();
let millsec=date.getMilliseconds();
let dayObj={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}
document.getElementsByTagName("h1")[0].innerHTML=`${hrs}:${mins}:${sec}:${Math.floor(millsec/100)}`;
document.getElementsByTagName("day")[0].innerHTML=`${day} ${dayObj[month]} ${year}`;
console.log(month);

}
setInterval(settime,100);
