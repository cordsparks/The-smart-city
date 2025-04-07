// JavaScript for interactive table rows
document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".market-table tbody tr");

    rows.forEach(row => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "#d3e3fc";
        });

        row.addEventListener("mouseout", () => {
            row.style.backgroundColor = "";
        });
    });
});
