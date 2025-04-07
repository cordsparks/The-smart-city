document.addEventListener("DOMContentLoaded", function() {
    let tableRows = document.querySelectorAll("table tr");

    tableRows.forEach(row => {
        row.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#f0e68c"; // Highlight row on hover
        });

        row.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#FFFFFF"; // Reset color on mouse out
        });
    });

    // Alert user when they click on a direction link
    let directionLinks = document.querySelectorAll("td a");
    directionLinks.forEach(link => {
        link.addEventListener("click", function() {
            alert("You are being redirected to Google Maps.");
        });
    });
});
