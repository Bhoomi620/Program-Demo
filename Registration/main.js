function validateForm() {
  var fname = document.forms.myForm.firstName.value;
  var lname = document.forms.myForm.lastName.value;
  var email = document.forms.myForm.email.value;
  var password = document.forms.myForm.Password.value;
  var confirmpassword = document.forms.myForm.confirmpassword.value;
  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 

  if (fname == "") {
    window.alert("Please enter your First Name properly.");
    return false;
  }

  if (lname == "" ) {
    window.alert("Please enter your Last Name properly.");
    return false;
  }
  
  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    return false;
  }
  
  if (password == "") {
    alert("Please enter your password");
    return false;
  }

  if(password.length <6){
    alert("Password should be atleast 6 character long");
    return false;
  }
  
  if(confirmpassword!=password){
  alert("Password and Confirm password should match!");
  return false;
}

}