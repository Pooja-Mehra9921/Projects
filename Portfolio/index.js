const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userMessage = document.getElementById("write-message");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("contact-form");
const errorContainer = document.getElementById("error-container"); // Add an element for errors
const successContainer = document.getElementById("success-container"); // Add an element for success messages

const userData = {
  name: "",
  email: "",
  message: "",
};

let isSubmit = false;

// Event listeners
userName.addEventListener("input", handleName);
userEmail.addEventListener("input", handleEmail);
userMessage.addEventListener("input", handleMessage);
submitBtn.addEventListener("click", handlesubmitBtn);
form.addEventListener("submit", handleForm);

function handleName(event) {
  if (event.target.value.length < 5) {
    showError("Name must be at least 5 characters");
    userData.name = ""; // Clear invalid data
    return;
  }
  userData.name = event.target.value;
  clearError();
}

function handleEmail(event) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(event.target.value)) {
    showError("Please enter a valid email address");
    userData.email = ""; // Clear invalid data
    return;
  }
  userData.email = event.target.value;
  clearError();
}

function handleMessage(event) {
  if (event.target.value.trim() === "") {
    showError("Message cannot be empty");
    userData.message = ""; // Clear invalid data
    return;
  }
  userData.message = event.target.value;
  clearError();
}

function handlesubmitBtn() {

  

  if (!userData.name || !userData.email || !userData.message) {
    showError("All fields are required");
    return;
  }

  if (userData.name.length < 5) {
    showError("Name must be at least 5 characters");
    return;
  }

  console.log("User data submitted:", userData);
  isSubmit = true;
  showSuccess("Form submitted successfully!");
}

function handleForm(event) {
  event.preventDefault(); 
}


function showError(message) {
  errorContainer.textContent = message; 
  errorContainer.style.display = "block"; 
  successContainer.style.display = "none"; 
}

function clearError() {
  errorContainer.textContent = ""; 
  errorContainer.style.display = "none"; 
}

function showSuccess(message) {
  successContainer.textContent = message; 
  successContainer.style.display = "block"; 
  errorContainer.style.display = "none"; 
  form.reset()

}
