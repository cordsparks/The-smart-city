document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let feedbackText = document.getElementById("feedback").value;

    if (feedbackText.trim() !== "") {
        document.getElementById("responseMessage").innerText = "Thank you for your feedback!";
        document.getElementById("feedback").value = "";
    } else {
        document.getElementById("responseMessage").innerText = "Please enter some feedback.";
    }
});
