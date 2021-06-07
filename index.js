var category = document.querySelector("#category").value;
document.querySelector("#playBtn").addEventListener("click", function() {
    localStorage.setItem("category", document.querySelector("#category").value);
});