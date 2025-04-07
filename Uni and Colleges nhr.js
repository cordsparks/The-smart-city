// Search Functionality
function searchUniversities() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let rows = document.querySelectorAll("#universityList tr");

    rows.forEach(row => {
        let institutionName = row.cells[0]?.textContent.toLowerCase();
        if (institutionName && institutionName.includes(input)) {
            row.style.display = "";
        } else if (institutionName) {
            row.style.display = "none";
        }
    });
}

// Auto-hide Past Institutions (if needed)
document.addEventListener("DOMContentLoaded", function () {
    let now = new Date();
    let cutoffDate = new Date("2025-12-31"); // Change to remove institutions after this date

    if (now > cutoffDate) {
        document.getElementById("universityList").innerHTML =
            "<tr><td colspan='4'>No universities available at the moment.</td></tr>";
    }
});