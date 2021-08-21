const contactForm = document.querySelector(".contact-form");

const thename = document.getElementById("thename");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: thename.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  alert("Submittted succesfully");

  // let xhr = new XMLHttpRequest();
  // xhr.open("POST", "/");
  // xhr.setRequestHeader("content-type", "application/json");
  // xhr.onload = () => {
  //   console.log(xhr.responseText);
  //   if (xhr.responseText == "success") {
  //     alert("Email Sent Successfuly");
  //     thename.value = "";
  //     email.value = "";
  //     subject.value = "";
  //     message.value = "";
  //   } else {
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

  // xhr.send(JSON.stringify(formData));
};);
