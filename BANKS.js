document.addEventListener("DOMContentLoaded", function () {
    const atmCells = document.querySelectorAll(".atm");

    atmCells.forEach(cell => {
        if (cell.dataset.atm === "yes") {
            cell.textContent = "✅ Yes";
            cell.style.color = "green";
        } else {
            cell.textContent = "❌ No";
            cell.style.color = "red";
        }
    });
});