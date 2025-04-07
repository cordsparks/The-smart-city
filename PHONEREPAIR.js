document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("confirmation").innerHTML = `<p style="color:green;"><b>Thank you, ${name}! Your feedback has been received.</b></p>`;
    
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
});
