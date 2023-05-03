const firebaseConfig = {
    apiKey: "AIzaSyA13P_yW64jMfF7uBOlN5G256rA3lxsBdI",
    authDomain: "contactform-87721.firebaseapp.com",
    databaseURL: "https://contactform-87721-default-rtdb.firebaseio.com",
    projectId: "contactform-87721",
    storageBucket: "contactform-87721.appspot.com",
    messagingSenderId: "524468813081",
    appId: "1:524468813081:web:0f04788e7664ba81375988",
    measurementId: "G-MG63PT96ZW"
  };

  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("message");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  