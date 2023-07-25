
// https://github.com/Scientist040

x = 0;
function  inc() {
    x++;
   document.getElementById('coun').value = x
   if(x == 100 || x == 200){
       navigator.vibrate(200);
     /*  var i = Math.floor(Math.random()*19968).toString(16);
       var bgc = "#"+i; 
       document.body.style.backgroundColor = bgc; */
   }
   
}

function  dic() {
    x=0
   document.getElementById('coun').value = x;
}
function save(){
var dta = document.getElementById('coun').value;
localStorage.setItem("count",dta);
document.getElementById('lc').innerHTML = localStorage.count;
}
window.onload = function(){
document.getElementById('lc').innerHTML = (!localStorage.count) ? "0" :  localStorage.count;
let batteryIsCharging = false;
navigator.getBattery().then
((battery) => {
 batteryIsCharging =
battery.charging;
document.getElementById('charge').innerHTML = batteryIsCharging;

batterylevel =
battery.level;
document.getElementById('bp').innerHTML = Math.floor(batterylevel*100)+"%";

 battery.addEventListener
('levelchange', () => {
   batterylevel =
Math.floor(battery.level*100) + "%";
document.getElementById('bp').innerHTML = batterylevel;
 });
});
}