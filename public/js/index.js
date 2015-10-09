var grid;
var cells;

$(function(){
	var screenHeight = window.innerHeight
	var screenWidth = window.innerWidth

	var numberOfCellsX = screenWidth / 30;
	var numberOfCellsY = screenHeight / 30;

	grid = $("<table class='grid'></table>");
	
	cells = [];
	cellIndices = []

	for (i = 0; i < numberOfCellsY; i++) {		
		var row = $("<tr></tr>");	
		var rowData = []	
		var rowIndices = []	
		for (j = 0; j < numberOfCellsX; j++) {			
			var col = $("<td class='cell'></td>");
			row.append(col)
			rowData.push(col)
			rowIndices.push({x: j, y: i});
		}		
		grid.append(row)
		cells.push(rowData);
		cellIndices.push(rowIndices);
	}

	$("body").append(grid);
	grid.css({"height": "100%", "width": "100%"});

	function blink() {				
		var xCoord = Math.round(Math.random() * (numberOfCellsX - 1));
		var yCoord = Math.round(Math.random() * (numberOfCellsY - 1));					

		cells[yCoord][xCoord].animate({opacity: 1}, 1000)		

		setTimeout(blink, 500);
		setTimeout(function() {
			cells[yCoord][xCoord].animate({"opacity": 0}, 1000)
		}, 500)
	}

	function droplets() {
		var steps
	}

	function wave(start) {
		var intensities = [];
		intensities.push({cell: start, intensity: 5});

		intensities.forEach(function(intensity) {
			intensity.cell
		})

		function makeWave() {

		}
	}
	
	var lastXCoord = 0
	function reveal() {	
		var speed = 2
		if (lastXCoord < numberOfCellsX) {
			for (i=0; i < numberOfCellsY; i++) {			
				for (j = lastXCoord; j < Math.min(lastXCoord + speed, numberOfCellsX); j++) {
					var fadeSpeed = Math.round(Math.random() * 1000)
					cells[i][j].animate({opacity: 0}, fadeSpeed)				
					// cells[i][j].animate({opacity: 0}, 100 + 100 * Math.sqrt(i))				
				}				
			}					
			lastXCoord = lastXCoord + speed;
			setTimeout(reveal, 10);
		} else {			
			setTimeout(function() { 
				lastXCoord = 0; 
				$(".contact-info").css({"z-index": 100});
				blink() 				
			}, 1000)
		}
	}

	reveal();	
})

