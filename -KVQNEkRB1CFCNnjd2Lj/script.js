var nameInput = $("#name-input")
var sortButton = $("#sort-button")
var enrolledStudentList = $(".enrolled-students")

var houses = [
  "Ravenclaw",
  "Hufflepuff",
  "Gryfindor",
  "Slytherin"
]

function chooseRandomHouse() {
  var index = Math.floor(Math.random() * houses.length)

  return houses[index]
}

sortButton.click(function() {
  var name = nameInput.howDoIGetTheValue()

  addListItem("enrolledStudents", {
    name: name,
    house: chooseRandomHouse()
  })
})

onNewListItem("enrolledStudents", function(student) {
  console.log("student", student)

  var newStudentElement = $("<div></div>")
  // what here?

  enrolledStudentList.append(newStudentElement)
})