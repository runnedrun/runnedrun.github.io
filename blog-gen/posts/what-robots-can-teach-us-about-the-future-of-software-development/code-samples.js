// 2010

// front end

$(".update-button").click(function (e) {
  var newName = e.target.value
  $.postJSON("/user/" + userId, {name: newName})
})

function updateUserName() {
  $.getJSON("/user/" + userId, function (userData) {
    $(".user-name").html(userData.name)
  })
}

//back end

function updateUser(req) {
  var user = req.params  
  db.User.write({name: user.name}, function() {
    req.send(200)  
  })  
}

function getUser(req) {
  var userId = req.params.userId  
  db.User.read(user, function (userData) {
    req.send(userData)  
  })  
}

// Today

<UpdateableText 
  confirmButton 
  dataReference={db.ref(`users/${userId}/name`)}
/>