var firebaseConfig = {
    apiKey: "AIzaSyBuTaOmgdk0hKGlDbzkUGk0164fDm_zFvk",
    authDomain: "kwitter-4106e.firebaseapp.com",
    databaseURL: "https://kwitter-4106e-default-rtdb.firebaseio.com",
    projectId: "kwitter-4106e",
    storageBucket: "kwitter-4106e.appspot.com",
    messagingSenderId: "763759003413",
    appId: "1:763759003413:web:6561976c1ee16d8a934b1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("Username");
  
  document.getElementById("jscode").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
    room_name = document.getElementById("textInput_2").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "page.html";
  }