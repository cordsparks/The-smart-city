// Display current date
document.addEventListener("DOMContentLoaded", function () {
    let dateElement = document.getElementById("currentDate");
    if (dateElement) {
        let today = new Date();
        let options = { year: "numeric", month: "long", day: "numeric" };
        dateElement.innerText = today.toLocaleDateString("en-US", options);
    }
});
