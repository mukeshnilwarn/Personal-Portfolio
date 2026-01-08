// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple alert on contact section click (optional)
const contactSection = document.querySelector("#contact");
contactSection.addEventListener("click", () => {
  alert("Thanks for visiting my portfolio!");
});
