<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   


});

function random() {
var number = !Math.round(Math.random());
document.getElementById("output").innerHTML=number;
if (number == true){
	numbernavigator.notification.beep(1);
	
	} 
else if (number ==false){
	numbernavigator.notification.beep(2);
	} 
}

function beep(){
	numbernavigator.notification.beep(1);
}
