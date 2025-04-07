// Display Current Date
document.addEventListener("DOMContentLoaded", function () {
    let dateElement = document.getElementById("currentDate");
    if (dateElement) {
        let currentDate = new Date().toDateString();
        dateElement.innerText = `Today's Date: ${currentDate}`;
    }
});
