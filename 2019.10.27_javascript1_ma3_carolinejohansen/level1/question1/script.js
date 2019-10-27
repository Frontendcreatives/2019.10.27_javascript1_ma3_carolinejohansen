//Use RegEx to validate form

function formValidation(){
  var nameInput = document.forms["myForm"]["xname"].value;
  if (nameInput == "") {
      alert("Please fill in your name");
      return false;
    }
  var numInput = document.forms["myForm"]["xphonenumber"].value;
  if (numInput !== /^\d{10}$/) {
     alert("Enter a valid phonenumber");
     return false;
    }
  var mailInput = document.forms["myForm"]["xemail"].value;
    if (mailInput !== /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/){
    alert("Enter a valid email address");
    return false;
    }
  }
