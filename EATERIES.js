// Display an alert when a link is clicked
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function() {
        alert("You are now being redirected to the homepage or Nyahururu.");
    });
});
