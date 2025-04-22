function validateForm() {
    let isValid = true;
  
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
    const fullName = document.getElementById("fullName").value.trim();
    const fname = document.getElementById("fname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const interest = document.getElementById("interest").value;
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{11}$/;
  
    if (fullName === "") {
      document.getElementById("fullNameError").textContent = "Full name is required.";
      isValid = false;
    }

    if (fname === "") {
        document.getElementById("fnameError").textContent = "Full name is required.";
        isValid = false;
      }
  
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Phone number must be exactly 11 digits.";
      isValid = false;
    }
  
    if (interest === "") {
      document.getElementById("interestError").textContent = "Please select an interest.";
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById("regForm").reset();
  
      const toast = document.getElementById("toast");
      toast.classList.add("show");
  
      setTimeout(() => {
        toast.classList.remove("show");
      }, 5000);
    }
  
    return false; // Prevent actual submission
  }


  function validateForm() {
    // Get the form elements
    var name = document.getElementById("Your-Name1").value;
    var email = document.getElementById("email1").value;
    var message = document.getElementById("message").value;

    // Validate the Name field
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate the Email field
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email == "") {
        alert("Please enter your email.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate the Message field
    if (message == "") {
        alert("Please enter a message.");
        return false;
    }

    // If all validations pass, redirect to the "thanks.html" page
    window.location.href = 'thanks.html';
    return false; // Prevent form submission to allow redirect
}