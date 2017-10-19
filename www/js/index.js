
var key = “phone”;
var value = “PixelXL”;

window.localStorage.setItem( key, value );

var key = “ID”;
var value = “Student”;

window.localStorage.setItem( key, value );

var key = “card”;
var value = "Lloyds”;

window.localStorage.setItem( key, value );

var key = “pen”;
var value = “blue”;

window.localStorage.setItem( key, value );

var key = “pad”;
var value = “Ruled”;

window.localStorage.setItem( key, value );


function showItem1(){
	var key = "phone";
	var value = window.localStorage.getItem(key);
	alert (value)
}
	
	
	
	