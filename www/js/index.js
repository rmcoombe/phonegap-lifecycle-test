
function random() {
var number = !Math.round(Math.random());
document.getElementById("output").innerHTML=number;

if (number == true){
	navigator.notification.beep(1);
	
	} 
if (number == false){
	navigator.notification.beep(2);
	} 
}

/*$("#mybutton").on("click",buttonclicked);

function buttonclicked (){
	
}*/	