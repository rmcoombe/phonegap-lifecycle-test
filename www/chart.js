var dps = [];   //dataPoints. 
var chart;
var startTime;


$(document).on("pagecreate", "#chartPage", function () {
	
	//store start time in unixtime 
	startTime = Date.now();
	
	//set uplistener for button
	$('#addButton').on('click', function() {
		
		navigator.accelerometer.watchAcceleration( accelerometerSuccess, accelerometerError, accelerometerOptions);
		function accelerometerSuccess(acceleration) {
	
		$('#sensorX').val(acceleration.x);
		}

		function accelerometerError() {
		alert('Error');
		}
		
		var value = acceleration.x;
		updateChart(value);
		
	});
	
	//setup chart
    chart = new CanvasJS.Chart("chartContainer",{
      	title :{
      		text: "A random chart"
      	},
      	axisX: {						
      		title: "Random Values"
      	},
      	axisY: {						
      		title: "Time (seconds)"
      	},
      	data: [{
      		type: "line",
      		dataPoints : dps
      	}]
   	});
	
	  
});

function updateChart(value) {
      	
      	//set new random y values
      	yVal = value;
		
		//x value is time since start 
		xVal = Date.now() - startTime;
		//concert from milliseocnds to seconds (divide by a thousand)
		xVal = xVal / 1000;
      	
		//add them to the data points to draw
		dps.push({x: xVal,y: yVal});
      	
		//don't let the chart get too big 
		//if there are more than 100 data points then start removing older data points
      	if (dps.length >  100 )
      	{
      		dps.shift();				
      	}

		//redraw the chart
      	chart.render();		
	  }
