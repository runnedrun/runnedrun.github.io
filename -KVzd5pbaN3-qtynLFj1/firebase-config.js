var firebaseConfig = {
  apiKey: "AIzaSyAb9rWnEfbCff2jcj55S6tjb9erO1UxsrA",
  authDomain: "classadoo-dev-40c18.firebaseapp.com",
  databaseURL: "https://classadoo-dev-40c18.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge-2")

function storeValue(name, value) {	
  var obj = {}
  obj[name] = value;
  store.child("vars").update(obj)
}

function addListItem(name, value) {		
  store.child("vars" + "/" + name).push(value)
}

function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}

function deleteValue(name) {	
  store.child("vars" + "/" + name).remove()
}

function onNewValue(name, callback) {	
  store.child("vars").child(name).on("value", function(data) {		
    callback(data.val());
  })
}