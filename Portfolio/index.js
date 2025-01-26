const user = {
  name: "",
  email: "",
  message: "",
};

const handleSubmitBtn = () => {
  let userName = document.getElementById("user-name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("write-message").value;

  console.log("name-------------", userName);
  console.log("email-------------", userEmail);
  console.log("Mesaage-------------", userMessage);

  if (!userName || !userEmail || !userMessage) {
    let errorElement = document.getElementsByClassName("error-div");
    errorElement.classList.add = "error";
    return;
  }

  if (userName && userEmail && userMessage) {
    console.log("message send--");
    user.name = userName;
    user.email = userEmail;
    user.message = userMessage;
  } else {
    console.warn("please enteter all fields--");
  }
};
