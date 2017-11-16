
function random() {
var number = !Math.round(Math.random());
document.getElementById("output").innerHTML=number;

if (number == true){
	navigator.vibrate([200, 300, 200]);
	
	} 
if (number == false){
	navigator.vibrate([400, 300, 400]);
	} 
}

/*$("#mybutton").on("click",buttonclicked);

function buttonclicked (){
	
}*/	