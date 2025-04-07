document.addEventListener("DOMContentLoaded", () => {
    let searchBox = document.createElement("input");
    searchBox.setAttribute("type", "text");
    searchBox.setAttribute("placeholder", "Search for a station...");
    searchBox.style.marginBottom = "10px";
    searchBox.style.padding = "8px";
    searchBox.style.width = "50%";
    document.querySelector("section").prepend(searchBox);

    searchBox.addEventListener("input", function() {
        let filter = searchBox.value.toLowerCase();
        let rows = document.querySelectorAll("tbody tr");

        rows.forEach(row => {
            let stationName = row.cells[0].textContent.toLowerCase();
            if (stationName.includes(filter)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});
