function validation() {
   var count = 1;
   fname = document.getElementById("fName").value;
   fname = fname.trim();
   if ((fname == "") || (!isNaN(fname))){
      document.getElementById("fNameValid").innerHTML = "Enter a valid first name!!";
	count--;
   }
   else {
      document.getElementById("fNameValid").innerHTML = "";
      count++;
   }


   lname = document.getElementById("lName").value;
   lname = lname.trim();
   if ((lname == "") || (!isNaN(lname))){
      document.getElementById("lNameValid").innerHTML = "Enter a valid last name!!";
      count--;
   }
   else {
      document.getElementById("lNameValid").innerHTML = "";
      count++;
   }


   add = document.getElementById("add").value;
   add = add.trim();
   if (add == ''){
      document.getElementById("addValid").innerHTML = "Enter a address!!";
      count--;
   }
   else {
      document.getElementById("addValid").innerHTML = "";
      count++
   }


   phone = document.getElementById("phone").value;
   phone = phone.trim();
   if ((phone == '') || (isNaN(phone))){
      document.getElementById("phoneValid").innerHTML = "Enter valid phone number!!";
      count--;
   }
   else {
      document.getElementById("phoneValid").innerHTML = "";
      count++;
   }


   email = document.getElementById("email").value;
   email = email.trim();
   if (email == ''){
      document.getElementById("emailValid").innerHTML = "Enter valid email number!!";
      count--;
   }
   else {
      if (!((email.includes('@')) && ((email.includes('.in')) || (email.includes('.gov')) || (email.includes('.com'))))){
         document.getElementById("emailValid").innerHTML = "Enter valid email number!!";
         count--;
   }
      else {
         document.getElementById("emailValid").innerHTML = "";
         count++;
      }
   }


   demoPass = document.getElementById("demoPass").value;
   conPass = document.getElementById("conPass").value;
   if (conPass === demoPass)
      document.getElementById("conPassValid").innerHTML = "";
   else {
      document.getElementById("conPassValid").innerHTML = "Password is to matching";
      count++;
   }

   if (demoPass == ""){
      document.getElementById("demoPassValid").innerHTML = "Create password";
      count--;
   }
   else
      count++;
   if (conPass == ""){
      document.getElementById("conPassValid").innerHTML = "Create password";
      count--;
   }
   else
      count++;
   if(count>=7)
      alert("Submitted Successfully");
}


function password() {
   document.getElementById("demoPassValid").innerHTML = "Password should contain<br>alphabets digits and special<br>symbolatleast 8 characters";
}


function confirmPassword() {
   demoPass = document.getElementById("demoPass").value;
   demoPass = demoPass.trim();
   var sp = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
   cal = '1';
   cal = cal + demoPass.match(sp);
   var ap = /[A-z]/g;
   calA = 1;
   calA = cal + demoPass.match(ap);
   var no = /[0-9]/g;
   calN = 1;
   calN = cal + demoPass.match(no);
   if ((demoPass.length >= 8) && (cal != "1") && (calA != "1") && (calN != "1"))
      document.getElementById("demoPassValid").innerHTML = "";
   else
      document.getElementById("demoPassValid").innerHTML = "Password should contain<br>alphabets digits and special<br>symbolatleast 8 characters";
}

function phoneNo(input) {
   input.value = input.value.replace(/\D/g, '');
}

