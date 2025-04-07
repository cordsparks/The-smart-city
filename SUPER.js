// Function to display an alert when a user clicks the feedback link
document.addEventListener("DOMContentLoaded", function() {
    let feedbackLink = document.querySelector("a[href^='mailto']");
    if (feedbackLink) {
        feedbackLink.addEventListener("click", function(event) {
            alert("You are about to send feedback via email.");
        });
    }
});
