// script.js

// Function to change the content of the 'message' element
function changeMessage() {
  const messageElement = document.getElementById("message");

  if (messageElement) {
    messageElement.innerHTML = "Download CV now!";
  } else {
    console.error("Element with ID 'message' not found.");
  }
}

// Call the changeMessage function
module.exports = { changeMessage };
