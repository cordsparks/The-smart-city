function filterApartments() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#apartmentTable tr");

    rows.forEach(row => {
        let location = row.cells[0].innerText.toLowerCase();
        row.style.display = location.includes(input) ? "" : "none";
    });
}