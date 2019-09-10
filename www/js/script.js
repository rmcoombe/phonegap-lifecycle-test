//Initialising connection to backendless
Backendless.initApp('34B647A3-6C0B-1067-FF39-F8576C2B4B00', 'CE4A9761-457D-437A-A1CE-CED1F0ED4873' );
const PAGE_SIZE = 80

const dataQuery = Backendless.DataQueryBuilder.create().setPageSize(PAGE_SIZE)
//---------------------------------------------------------------------------------------------------


//-------Event Listeners and actions-------------------//
document.addEventListener("DOMContentLoaded", function() {
    //getPrinters();
	//getPractices();
	getDropdown();
});



//-----Creation of Practices, Devices and Printers-----------//

//Function to add a practice to backendless
function addPractice(){
	var code = document.getElementById("pcode").value;
	var name = document.getElementById("pname").value;
	var range = document.getElementById("iprange").value;
	var dc = document.getElementById("dcip").value;
	var dg = document.getElementById("dgip").value;
	
	var Pracentry = {
        L_Code: code,
        Name: name,
        IP_Range: range,
        DC_IP: dc,
        Default_Gateway: dg,

    }
	
	Backendless.Data.of("Practice").save(Pracentry).then(saved).catch(error);
	
	
    function saved(savedTask) {
        swal("Nice!", "Your Entry Was Saved!", "success");
		document.getElementById("pcode").value ="";
		document.getElementById("pname").value ="";
		document.getElementById("iprange").value ="";
		document.getElementById("dcip").value ="";
		document.getElementById("dgip").value ="";

    }

    function error(err) {
        swal("Uh Oh", "Failed because: " + err, "error");
    }

}


//Function to add a device to backendless
	function addDevice(){
	
	
	
	var compName = document.getElementById("cname").value;
	var compDesc = document.getElementById("cdesc").value;
	var printer =  document.getElementById("printerList").value
	var setPrint = document.getElementById("hasSetPrint").checked;
	var labelTrace = document.getElementById("hasLabelTrace").checked;
	var dispensIT = document.getElementById("hasDispenseIT").checked;
	var practice = document.getElementById("pracList").value;
	var ltIcon;
	var spIcon;
	var ditIcon;
	
	if (document.getElementById("hasLabelTrace").checked){
		var ltIcon = '<i class="fa fa-check"></i>'
	} else {var ltIcon = '<i class="fa fa-times"></i>'}
	
	if (document.getElementById("hasSetPrint").checked){
		var spIcon = '<i class="fa fa-check"></i>'
	} else {var spIcon = '<i class="fa fa-times"></i>'}
	
	if (document.getElementById("hasDispenseIT").checked){
		var ditIcon = '<i class="fa fa-check"></i>'
	} else {var ditIcon = '<i class="fa fa-times"></i>'}
	
		
	var Deventry = {
        deviceName: compName,
        deviceDesc: compDesc,
        printer: printer,
        hasSetPrint: spIcon,
        hasLabelTrace: ltIcon,
		hasDispensIT: ditIcon,
		practice_name : practice

    }
	
	Backendless.Data.of("device").save(Deventry).then(saved).catch(error);
    function saved(savedTask) {
        swal("Nice!", "Your Entry Was Saved!", "success");
		document.getElementById("cname").value = "";
		document.getElementById("cdesc").value = "";
		document.getElementById("printerList").value = "";
		document.getElementById("hasSetPrint").checked = false;
		document.getElementById("hasLabelTrace").checked = false;
		document.getElementById("hasDispenseIT").checked = false;

    }
    function error(err) {
        swal("Uh Oh", "Failed because: " + err, "error");
    }
}

//Function to add a printer to backendless
function addPrinter(){
	
	var prtMake = document.getElementById("prtMake").value;
	var prtModel = document.getElementById("prtModel").value;
	
	var entry = {
        Make: prtMake,
        Model: prtModel,

    }
	
	Backendless.Data.of("printer").save(entry).then(saved).catch();
	

    function saved(savedTask) {
        swal("Nice!", "Your Entry Was Saved!", "success");
		document.getElementById("prtMake").value = "";
		document.getElementById("prtModel").value = "";

    }

    function error(err) {
        swal("Uh Oh", "Failed because: " + err, "error");
    }
	
}

function createSetPrint () {
	
	var printer = document.getElementById("printerList").value;
	var printerQuotes = '"' + printer + ' series"';
	//alert (printerQuotes);
	var content = ':Checks that Print Spooler has started and starts it if not.\n NET Start Spooler \n:Creates a 4 second pause delay.\nPING 127.0.0.1 -n 4 -w 1000 >NUL\n:Add default printer as specified between quotations.\nRUNDLL32 PRINTUI.DLL,PrintUIEntry /y /n  ' + printerQuotes + '';
    var textFile = null,
        makeTextFile = function (text) {
            var data = new Blob([text], {
                type: 'text/plain'
            });

            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };


    var create = document.getElementById('create'),
        textbox = document.getElementById('textbox');

    create.addEventListener('click', function () {
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(content);
        link.style.display = 'block';
    }, false);
};


//----End of creation section------------------------------------------------------------------------//


//----Start of Retreival Section -------------------------------------------------------------------//


//Function to get the drop down lists on each page

function getDropdown() {
	
	var whereClause = "Model > 1";
	var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( whereClause );
	queryBuilder.setPageSize( 50 );
	queryBuilder.setSortBy ( ["Make", "Model ASC" ] );
    Backendless.Data.of("printer").find(queryBuilder).then(processPrinterResults).catch();
	
//
}

function processPrinterResults(printers) {
    
    for (var i = 0; i < printers.length; i++) {
		var x = document.getElementById("printerList");
		var option = document.createElement("option");
		option.text = printers[i].Make + " " + printers[i].Model;
	    x.add(option);  
		
    }
	
	var whereClause = "DC_IP > 1";
	var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( whereClause );
	queryBuilder.setPageSize( 50 );
	queryBuilder.setSortBy ( ["Name ASC" ] );
	Backendless.Data.of("Practice").find(queryBuilder).then(processPracticeResults).catch();
}

function processPracticeResults(practices) {
    for (var i = 0; i < practices.length; i++) {
		var y = document.getElementById("pracList");
		var option = document.createElement("option");
		option.text = practices[i].Name;
	    y.add(option);  
		
    }
}

//Function to populate device table with data
function populateDeviceTable(){
	
	var current = document.getElementById("pracList").value
	var whereClause = "practice_name = '" + current + "'";
	var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( whereClause );
	queryBuilder.setPageSize( 50 );
	
	Backendless.Data.of("device").find(queryBuilder).then(processDeviceResults).catch(error);
	
function processDeviceResults(devices){
		
		var table = document.getElementById("table");

		for(var i = table.rows.length - 1; i > 0; i--)
		{
			table.deleteRow(i);
		}

	
	
	for (var i = 0; i < devices.length; i++){
		var table = document.getElementById("table");
		var copyText = "//" + devices[i].deviceName + "/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp";	
		
		var row = table.insertRow(1);
		var cell7 = row.insertCell(0);
		var cell6 = row.insertCell(0);
		var cell5 = row.insertCell(0);
		var cell4 = row.insertCell(0);
		var cell3 = row.insertCell(0);
		var cell2 = row.insertCell(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = devices[i].deviceName;
		cell2.innerHTML = devices[i].deviceDesc;
		cell3.innerHTML = devices[i].printer;
		cell4.innerHTML = devices[i].hasSetPrint;
		cell5.innerHTML = devices[i].hasLabelTrace;
		cell6.innerHTML = devices[i].hasDispensIT;
		cell7.innerHTML = '<input type="text" value="' + copyText + '">';
	}
	
}

function error(err) {
        alert("fail: " + err);
    }
}

function addNACS(){
	document.getElementById("cname").value = "NACS";
}

