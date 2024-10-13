// Handle the newsletter form submission
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the email input value
    const emailInput = document.getElementById("email").value;

    // Display a success message
    document.getElementById(
      "form-message"
    ).innerText = `Thank you for subscribing, ${emailInput}!`;

    // // Reset the form
    document.getElementById("newsletter-form").reset();
  });
