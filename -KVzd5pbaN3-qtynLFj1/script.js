function logArgs(args) {
  var args = 1
  console.log(args)
}

var functionString = logArgs.toString()

var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)

//function with argument
function perimeter(length, width) {
  console.log(length + length + width + width);
};

var call = "\nperimeter(3,5)"

var functionString = perimeter.toString() + call

var functionExample = $("#function-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

functionExample.html(formattedExample)

//function takes in function
$("#function-input").keydown(function(e) {	
  if (e.keyCode == "13") {
    $("#function-input").css("background-color", "yellow");
  }
})

//jquery
$("#button").click(function() {
  console.log("Jquery Example");
});

$(document).ready(function() {
  $('#colorblock').mouseenter(function() {
    $(this).animate({
      height: '+=10px'
    });
  });
  $('#colorblock').mouseleave(function() {
    $(this).animate({
      height: '-=10px'
    }); 
  });
  $('#colorblock').click(function() {
    $(this).toggle(1000);
  }); 
});

var functionString = button.toString()

var buttonExample = $("#button")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

buttonExample.html(formattedExample)

//firebase
var input = $("#firebase-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("sophiasList", valueToSave);
  }
})

onNewListItem("sophiasList", function(value) {
  $("#firebase-display").append("<div>" + value + "</div>")
}) 
