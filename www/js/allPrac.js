//Initialising the connection with Backendless
Backendless.initApp('34B647A3-6C0B-1067-FF39-F8576C2B4B00', 'CE4A9761-457D-437A-A1CE-CED1F0ED4873' );

//When everything is loaded listener
document.addEventListener("DOMContentLoaded", function() {
    getEntries();
});

//Retreiving the previously stored entries on backendless
function getEntries() {
   
    Backendless.Data.of("Practice").find().then(processResults).catch(error);

}

//Original code adapted from in class slides. Session 14 Social Media & MBaaS. Available 
//at https://worcesterbb.blackboard.com/webapps/blackboard/execute/content/file?cmd=view&content_id=_847653_1&course_id=_28334_1

//Lightbox library used available at http://lokeshdhakar.com/projects/lightbox2/

//Function to create each additional image link and set up the caption
function processResults(entries) {
    
    for (var i = 0; i < entries.length; i++) {
		
		var table = document.getElementById("table");
		var row = table.insertRow(1);
		var cell4 = row.insertCell(0);
		var cell3 = row.insertCell(0);
		var cell2 = row.insertCell(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = entries[i].Name;
		cell2.innerHTML = entries[i].L_Code;
		cell3.innerHTML = entries[i].Default_Gateway;
		cell4.innerHTML = entries[i].IP_Range;
	       
		
    }
}

function error(error) {
   
}
