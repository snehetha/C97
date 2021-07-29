
 var firebaseConfig = {
      apiKey: "AIzaSyD3j7BVloZlpc0QtjMULvMeZ7nyu_C5DTE",
      authDomain: "practice-project-2e868.firebaseapp.com",
      databaseURL: "https://practice-project-2e868-default-rtdb.firebaseio.com",
      projectId: "practice-project-2e868",
      storageBucket: "practice-project-2e868.appspot.com",
      messagingSenderId: "223896732430",
      appId: "1:223896732430:web:2e03c5e93e89f9315ccd5f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="Kwitter_login.html";
}
