document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully!");

    // Adding a simple alert when clicking on the "Contact Us" button
    const contactButton = document.querySelector(".contact-link");
    
    if (contactButton) {
        contactButton.addEventListener("click", function (event) {
            alert("You are about to send an email to sales@ukulimaonline.com.");
        });
    }
});
