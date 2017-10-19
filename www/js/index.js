
window.localStorage.setItem("phone", "pixelXL" );
window.localStorage.setItem( "ID", "Student" );
window.localStorage.setItem( "card", "lloyds" );
window.localStorage.setItem( "pen", "blue" );
window.localStorage.setItem( "pad", "ruled" );


function showItem1(){
	
	var value = window.localStorage.getItem("phone");
	alert (value);
}
	
function showItem2(){
	
	var value = window.localStorage.getItem("ID");
	alert (value);
}
	
	function showItem3(){
	
	var value = window.localStorage.getItem("card");
	alert (value);
}
	
	function showItem4(){
	
	var value = window.localStorage.getItem("pen");
	alert (value);
}
	
	function showItem5(){
	
	var value = window.localStorage.getItem("pad");
	alert (value);
}
	
	
	
	