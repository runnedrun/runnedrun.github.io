var grid;
var cells;

function resizeSections() {
	var screenHeight = window.innerHeight
	$(".section-1").css("height", screenHeight);
	$(".section-2").css("min-height", screenHeight);
}

$(function(){
	resizeSections();

	var screenHeight = window.innerHeight
	var screenWidth = window.innerWidth	

	var numberOfCellsX = Math.floor(screenWidth / 25);
	var numberOfCellsY = Math.floor(screenHeight / 25);

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

	function blinkCell(xCoord, yCoord, animateTime, holdTime, onFinish) {
		var holdTime = holdTime || 500;
		var animateTime = animateTime || 1000;
		cells[yCoord][xCoord].animate({opacity: 1}, animateTime)				

		setTimeout(function() {
			cells[yCoord][xCoord].animate({"opacity": 0}, animateTime);
			onFinish && onFinish();
		}, holdTime)
	}

	function blinkBackground() {
		var xCoord = Math.round(Math.random() * (numberOfCellsX - 1));
		var yCoord = Math.round(Math.random() * (numberOfCellsY - 1));					

		if (cellsInChevron.indexOf([xCoord, yCoord]) <= -1) {
			blinkCell(xCoord, yCoord)		
		}
				
		setTimeout(blinkBackground, 500);	
	}

	function flickerIn(xCoord, yCoord) {
		blinkCell(xCoord, yCoord, 50, Math.random() * 200 + 50, function() {
			setTimeout(function() { blinkCell(xCoord, yCoord, 100, 1, function() {
				cells[yCoord][xCoord].animate({opacity: 1}, 50)		
			}) }, 100)
		});
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
				$(".contact-info").css({"z-index": 100});
				blinkBackground() 		
				cellsInChevron.forEach(function(cell) {
					flickerIn(cell[0], cell[1]); 	
				})			
			}, 300)
		}
	}

	// we shouldn't blink the cells which are being used for the chevron
	var center = Math.floor(numberOfCellsX / 2)
	var cellsInChevron = [
		[center, numberOfCellsY - 2],
		[center + 1, numberOfCellsY - 3],
		[center - 1, numberOfCellsY - 3],
		[center + 2, numberOfCellsY - 4],
		[center - 2, numberOfCellsY - 4]
	]

	reveal();	
})

$(window).resize(resizeSections);

