var chocbar ={
	"name": "Wispa",
	"Calories" : "215",
	"Fat" : "13.3g",
	"Saturates" : "8.2g",
	"Sugars" : "20.5g",
	"Salt" : "0.09g"
}

var	chocbarString = JSON.stringify(chocbar);

window.localStorage.setItem("chocbar", chocbarString);

var getchocbar = window.localStorage.getItem("chocbar");

var detailJSON = JSON.parse(getchocbar);


function calories(){
	
	alert ("The Calories in a " + chocbar.name + " are " + chocbar.Calories);

}
function fat(){
	
	alert ("The fat in a " + chocbar.name + " is " + chocbar.Fat);

}
function saturates(){
	
	alert ("The saturates in a " + chocbar.name + " are " + chocbar.Saturates);

}
function sugars(){
	
	alert ("The suagrs in a " + chocbar.name + " are " + chocbar.Sugars);

}
function salt(){
	
	alert ("The salt in a " + chocbar.name + " are " + chocbar.Salt);

}
