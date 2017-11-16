
function random() {
var number = !Math.round(Math.random());
document.getElementById("output").innerHTML=number;
if (number == true){
	numbernavigator.notification.beep(1);
	
	} 
if (number == false){
	numbernavigator.notification.beep(2);
	} 
}

