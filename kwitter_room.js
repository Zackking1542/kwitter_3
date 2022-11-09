
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDV5-uhNV2ZmhafBKJeZuqnCTM7gVD1WPU",
      authDomain: "classtest-63e68.firebaseapp.com",
      databaseURL: "https://classtest-63e68-default-rtdb.firebaseio.com",
      projectId: "classtest-63e68",
      storageBucket: "classtest-63e68.appspot.com",
      messagingSenderId: "1098228136415",
      appId: "1:1098228136415:web:edd0ccfb64a23cb3b9ac6a"
    };
    
    var app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update ({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}