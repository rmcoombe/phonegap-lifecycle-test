$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
}

function storeValue() {
	var text = $('#textinput').val();
	var setItem = window.localStorage.setItem("input",text)
	
}

function showValue() {
	var output = window.localStorage.getItem("input");
	document.getElementById("text").innerHTML=output;
}