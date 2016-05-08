
function printCanvas() {
	html2canvas(document.body, { 
		allowTaint: true,
		taintTest: false, 
		onrendered: function(canvas) {
			$(".screen-section").hide();
			document.body.appendChild(canvas);
			window.print();
			// $('canvas').remove();
			// $(".screen-section").show();
		}
	});	
}
