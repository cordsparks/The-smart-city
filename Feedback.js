document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackResponse = document.getElementById("feedbackResponse");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents the default form submission behavior
            
            feedbackResponse.textContent = "Thank you for your feedback!";
            feedbackResponse.classList.remove("hidden");

            // Optionally, clear the form fields
            feedbackForm.reset();
        });
    }
});