function validation(event) {
   event.preventDefault()
   var count = 0;
   fname = document.getElementById("fName").value;
   fname = fname.trim();
   if ((fname == "") || (!isNaN(fname))){
      document.getElementById("fNameValid").innerHTML = "Enter a valid first name!!";
	count++;
   }
   else {
      document.getElementById("fNameValid").innerHTML = "";
   }


   lname = document.getElementById("lName").value;
   lname = lname.trim();
   if ((lname == "") || (!isNaN(lname))){
      document.getElementById("lNameValid").innerHTML = "Enter a valid last name!!";
      count++;
   }	
   else {
      document.getElementById("lNameValid").innerHTML = "";
   }


   add = document.getElementById("add").value;
   add = add.trim();
   if (add == ''){
      document.getElementById("addValid").innerHTML = "Enter a address!!";
      count++;
   }
   else 
      document.getElementById("addValid").innerHTML = "";
     
   


   phone = document.getElementById("phone").value;
   phone = phone.trim();
   if ((phone == '') || (isNaN(phone))||(phone.length!=10)){
      document.getElementById("phoneValid").innerHTML = "Enter valid phone number!!";
      count++;
   }
   else {
      document.getElementById("phoneValid").innerHTML = "";
   }


   email = document.getElementById("email").value;
   email = email.trim();
   if (email == ''){
      document.getElementById("emailValid").innerHTML = "Enter valid email address!!";
      count++;
   }
   else {
      emailFormate=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailFormate)){
         document.getElementById("emailValid").innerHTML = "Enter valid email address!!";
         count++;
      }
      else {
         document.getElementById("emailValid").innerHTML = "";
      }
   }

   demoPass = document.getElementById("demoPass").value;
   conPass = document.getElementById("conPass").value;
   if (demoPass == ""){
      document.getElementById("demoPassValid").innerHTML = "Enter password";
      count++;
   }
   if (conPass == ""){
      document.getElementById("conPassValid").innerHTML = "Enter password";
      count++;
   }
   if(count==0){
      alert("Submitted Successfully");
      document.registration.reset();
   }
}



function password(){
   demoPass = document.getElementById("demoPass").value;
   conPass = document.getElementById("conPass").value;
   if (conPass == demoPass)
      document.getElementById("conPassValid").innerHTML = "";
   else {
      document.getElementById("conPassValid").innerHTML = "Password is not matching";
   }

}


function confirmPassword() {
   demoPass = document.getElementById("demoPass").value;
   var sp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
   var ap = /[A-z]/g;
   var no = /[0-9]/g;
   if(demoPass.match(" "))
       document.getElementById("demoPassValid").innerHTML = "Space is not allowed";
  else{
       var spCh = sp.test(demoPass);
       var  al= ap.test(demoPass);
       var Digit = no.test(demoPass);
       if (((demoPass.length >= 8) && (spCh) && (al) && (Digit)))
           document.getElementById("demoPassValid").innerHTML = "";
       else
           document.getElementById("demoPassValid").innerHTML ="Password should contain<br>alphabets digits and special<br>symbolatleast 8 characters";
  }

}

function phoneNo(input) {
   input.value = input.value.replace(/\D/g, '');
}

function names(input){
   input.value = input.value.replace(/[^A-Za-z]/g, '');
}

