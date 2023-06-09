const firebaseConfig = {
    apiKey: "AIzaSyDVM5ixypcaUp9xspFXOGK0HRt9Vs0xsTY",
    authDomain: "tedx-contactform.firebaseapp.com",
    databaseURL: "https://tedx-contactform-default-rtdb.firebaseio.com",
    projectId: "tedx-contactform",
    storageBucket: "tedx-contactform.appspot.com",
    messagingSenderId: "439254608683",
    appId: "1:439254608683:web:9e9bc5e50e96ad4d1ab36e",
    measurementId: "G-BJQK4RJL60"
  };

  
  // Initialize firebase:

  firebase.initializeApp(firebaseConfig);

  // Reference your DB

  var contactFormDB = firebase.database().ref("contactform");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');

      saveMessage(name,email,message);
     console.log(name,email,message);
    
  }

 
  const saveMessage = (name, email, message) =>{
    var newContactform = contactFormDB.push();

    newContactform.set({
      name : name, 
      email : email,
      message : message,
    });
  };


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

