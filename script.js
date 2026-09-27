const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }

});

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
